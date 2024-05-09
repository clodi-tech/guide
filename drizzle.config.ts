import type { Config } from "drizzle-kit";
export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.AUTH_DRIZZLE_URL!,
  },
} satisfies Config;
