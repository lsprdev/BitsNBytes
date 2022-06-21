import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function dogDelete(dog_id:string) {
    await prisma.$connect();
    const dog = await prisma.dog.delete({
        where: {
            id: dog_id
        }
    });
    await prisma.$disconnect();
}