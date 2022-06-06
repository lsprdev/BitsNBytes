import { response } from "../lib/responseConstructor";
import PrismaImport from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Return all dogs from database
export async function getDogs(){
    await prisma.$connect();
    const dogs = await prisma.dog.findMany();
    
    if (!dogs) {
        prisma.$disconnect();
        return new response(503, "Dogs not found");
    }

    await prisma.$disconnect();
    return new response(200, "Dogs found", dogs)
}

//Return expecific dog from database
export async function getDog(dog_id: string) {
    await prisma.$connect();
    const dog = await prisma.dog.findUnique({
        where:{
            id: dog_id,
        },
    });
    if(!dog){
        prisma.$disconnect();
        return new response(503, `Dog ${dog_id} not found!`);
    }
    await prisma.$disconnect();
    return new response(200, `Dog ${dog_id} found!`, dog);
}

//Return expecific comments from database
export async function getComments(dog_id: string) {
    await prisma.$connect();

}