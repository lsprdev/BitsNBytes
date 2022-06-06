import { response } from "../lib/responseConstructor";
import PrismaImport from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getDogs(){
    await prisma.$connect();
    const dogs = await prisma.dog.findMany();
    
    if (!dogs) {
        prisma.$disconnect();
        return new response(503, `Dogs not found`);
    }

    await prisma.$disconnect();
    return new response(200, "Dogs found", dogs)
}