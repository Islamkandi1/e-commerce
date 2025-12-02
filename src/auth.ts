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
        console.log(user);
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
