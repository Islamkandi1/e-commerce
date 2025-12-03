import CredentialsProvider from "next-auth/providers/credentials";
import { supabaseServer } from "../supabase-server";
import argon2 from "argon2";
import { Account, Profile, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
export const authOption = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },
      //   sign in function=====================================================
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email and password required");
        }
        // get user============================================================
        const { data: user } = await supabaseServer
          .from("users")
          .select("*")
          .eq("email", credentials.email)
          .single();

        // If no error and we have user data, return it===========================
        if (!user.ok) {
          throw new Error("Invalid email or password");
        }

        // compair password==============================================
        const isValid = await argon2.verify(
          user.password,
          credentials.password
        );
        if (!isValid) {
          throw new Error("Invalid email or password");
        }
        // Return user if user is exist=========================================
        return {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      },
    }),
    // ----------------google--------------------------------------
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({
      token,
      user,
      account,
      profile,
    }: {
      token: JWT;
      user?: User;
      account: Account;
      profile?: Profile;
    }) {
      if (account && profile) {
        token.email = profile.email ?? token.email;
        token.firstName =
          profile.given_name ?? profile.name?.split(" ")[0] ?? token.firstName;
        token.lastName =
          profile.family_name ??
          profile.name?.split(" ").slice(1).join(" ") ??
          token.lastName;
      }
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user.email = token.email as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
      }
      return session;
    },
  },
};
