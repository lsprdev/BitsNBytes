import { response } from "../lib/responseConstructor";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addDog(dogphoto: string, dogname: string, dogage: string, dogweight: string, dogdesc: string, dogowner:string) {
    await prisma.$connect();
    const dog = await prisma.dog.create({
        data: {
            photo: dogphoto,
            name: dogname,
            age: dogage,
            weight: dogweight, //change to string
            description: dogdesc,
            owner_name: dogowner,
        }
    });
};

export async function updateDog (dog_id: string, dogphoto: string, dogname: string, dogage: string, dogweight: string, dogdesc: string, dogowner:string) {
    await prisma.$connect();
    const dog = await prisma.dog.update({
        where: {
            id: dog_id
        },
        data: {
            photo: dogphoto,
            name: dogname,
            age: dogage,
            weight: dogweight, //change to string
            description: dogdesc,
            owner_name: dogowner,
        }
    });
}

export async function deleteDog (dog_id: string) {
    await prisma.$connect();
    const dog = await prisma.dog.delete({
        where: {
            id: dog_id
        }
    });
}
