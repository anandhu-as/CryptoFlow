import { PrismaClient } from "@/generated/prisma";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { DB_URL } from "@/config/env";

const pool = new Pool({ connectionString: DB_URL });
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
