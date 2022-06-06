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
    const comments = await prisma.comment.findMany({
        where: {
            dog_id: dog_id
        },
    });
    if(!comments) {
        prisma.$disconnect();
        return new response(503, "Comments not found!");
    }
    await prisma.$disconnect();
    return new response(200, "Comments found!", comments);
}

export async function getDaily(dog_id: string){
    await prisma.$connect();
    const daily = await prisma.dailyStatus.findMany({
        where: {
            dog_id: dog_id
        },
    });
    if(!daily) {
        prisma.$disconnect();
        return new response(503, "Daily Status not found!");
    }
    await prisma.$disconnect();
    return new response(200, "Daily Status found!", daily);
}

export async function getMedical(dog_id: string){
    
}