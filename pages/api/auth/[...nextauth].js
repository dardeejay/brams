import NextAuth, {
  Awaitable,
  NextAuthOptions,
  User as AuthUser,
  Session,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/userRecords";
import jwt from "jsonwebtoken";

// const secret = process.env.SECRET;
// const createToken = (_id, privilege) => {
//   return jwt.sign({ _id, privilege }, process.env.SECRET, { expiresIn: "3d" });
// };
// interface CustomUser extends AuthUser {
//   role: string;
// }
// interface CustomSession extends Session {
//   role: string;
//   name: string;
// }
const authOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.SECRET,
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        await dbConnect();
        const user = await User.login(username, password);
        if (user) {
          // Extract role or privilege data from user object
          const { username, privilege } = user;
          console.log(`${privilege}`);
          // Check user's role or privilege and return session data accordingly
          if (privilege === "admin") {
            return {
              name: username,
              role: "admin",
              token: jwt.sign({ username, privilege }, process.env.SECRET, {
                expiresIn: "3d",
              }),
            };
          } else if (privilege === "basic") {
            return {
              name: username,
              role: "basic",
              token: jwt.sign({ username, privilege }, process.env.SECRET, {
                expiresIn: "3d",
              }),
            };
          }
        } else {
          return null;
        }
      },
    }),
  ],
  //create a callback function that will add user role from dtabase query to the session object
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        const customUser = user;
        token.role = customUser.role;
        token.name = customUser.name;
      }
      return token;
    },
    async session({ session, token }) {
      const customSession = session;
      customSession.role = token.role;
      customSession.name = token.name;
      return customSession;
    },
  },
};

export default NextAuth(authOptions);