import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addDog(dogphoto: string, dogname: string, dogage: string, dogweight: string, dogdesc: string, dogowner:string, is_adoptable: string) {
    await prisma.$connect();
    const dog = await prisma.dog.create({
        data: {
            photo: dogphoto,
            name: dogname,
            age: dogage,
            weight: dogweight, //change to string
            description: dogdesc,
            owner_name: dogowner,
            is_adoptable: is_adoptable,
        }
    });
    await prisma.$disconnect();
};

export async function updateDog(dog_id: string, dogphoto: string, dogname: string, dogage: string, dogweight: string, dogdesc: string, dogowner:string, is_adoptable: string) {
    await prisma.$connect();
    const dog = await prisma.dog.update({
        where: {
            id: dog_id
        },
        data: {
            name: dogname,
            age: dogage,
            weight: dogweight, //change to string
            description: dogdesc,
            owner_name: dogowner,
            is_adoptable: is_adoptable,
        }
    });
    await prisma.$disconnect();
};

export async function deleteDog (dog_id: string) {
    await prisma.$connect();
    const dog = await prisma.dog.delete({
        where: {
            id: dog_id
        }
    });
    await prisma.$disconnect();
}


// arrumar isso
export async function addRegd(dog_id: string, text: string) {
    prisma.$connect;
    const dog = await prisma.daily.create({
        data: {
            dog_id: dog_id,
            date: new Date(),
            description: text,
        }
    });
    await prisma.$disconnect();
}

export async function addRegm(dog_id: string, text: string){
    await prisma.$connect();
    const dog = await prisma.medical.create({
        data: {
            dog_id: dog_id,
            date: new Date(),
            description: text,
        }
    });
    await prisma.$disconnect();
}

// IMGUR FUNCTION
export async function uploadImage(image: string) {
    
    
}