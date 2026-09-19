import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import { saltAndHashPassword } from "@/utils/password"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        console.log({ credentials });
        if (
          credentials.username === "admin" &&
          credentials.password === "admin123"
        ) {
          return {
            id: "1",
            name: "admin",
          };
        }
        return null;
      },
    }),
  ],
});
