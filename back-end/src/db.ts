import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });

export async function teste() {
  try {
    await prisma.$connect();
    console.log("conectado com o bd postgres");
  } catch (error) {
    console.log(error);
  }
}
// export { prisma };
