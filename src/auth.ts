import CredentialsProvider from "next-auth/providers/credentials";
import { supabaseServer } from "../supabase-server";
import argon2 from "argon2";
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
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
        const { data: user, error } = await supabaseServer
          .from("users")
          .select("*")
          .eq("email", credentials.email)
          .single();

        // If no error and we have user data, return it===========================
        if (error || !user) {
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
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, user }: { session: Session; user: User }) {
      if (user) {
        session.user.id = user.id;
        session.user.firstName = user.firstName;
        session.user.lastName = user.lastName;
        session.user.email = user.email;
      }
      return session;
    },
  },
};
