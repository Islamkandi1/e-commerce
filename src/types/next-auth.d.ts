import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      firstName: string;
      lastName: string;
      email: string;
    };
  }
  interface Profile {
    given_name?: string;
    family_name?: string;
  }
  interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }
}
