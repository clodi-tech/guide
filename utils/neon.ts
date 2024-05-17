import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const connectionString = process.env.AUTH_DRIZZLE_URL!;
const sql = neon(connectionString);

export const db = drizzle(sql);
