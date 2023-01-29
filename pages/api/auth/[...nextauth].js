import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      const admins = ["rodrigoezequielgerman@gmail.com"];
      // const role = await authservice.getRoleByEmail(user)
      if (admins.includes(session.user?.email)) {
        session.role = "admin";
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
});
