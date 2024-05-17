import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import github from "next-auth/providers/github";
import resend from "next-auth/providers/resend";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

const connectionString = process.env.AUTH_DRIZZLE_URL!;
const sql = neon(connectionString);
export const db = drizzle(sql);

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [google, github, resend],
});
