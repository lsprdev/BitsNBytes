import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function addDog(dogphoto: string, dogname: string, doggender: string, dogfur:string, dogtemp: string, dogage: string, dogweight: string, dogdesc: string, dogowner:string, is_castrated: string, is_adoptable: string, dogobs: string) {
    await prisma.$connect();
    const dog = await prisma.dog.create({
        data: {
            photo: dogphoto,
            name: dogname,
            gender: doggender,
            fur: dogfur,
            temperament: dogtemp,
            age: dogage,
            weight: dogweight, //change to string
            description: dogdesc,
            owner_name: dogowner,
            is_castrated: is_castrated,
            is_adoptable: is_adoptable,
            observations: dogobs,
        }
    });
    await prisma.$disconnect();
};

export async function updateDog(dog_id: string, dogphoto: string, dogname: string, doggender: string, dogfur:string, dogtemp: string, dogage: string, dogweight: string, dogdesc: string, dogowner:string, is_castrated: string, is_adoptable: string, dogobs: string) {
    await prisma.$connect();
    const dog = await prisma.dog.update({
        where: {
            id: dog_id
        },
        data: {
            photo: dogphoto,
            name: dogname,
            gender: doggender,
            fur: dogfur,
            temperament: dogtemp,
            age: dogage,
            weight: dogweight, //change to string
            description: dogdesc,
            owner_name: dogowner,
            is_castrated: is_castrated,
            is_adoptable: is_adoptable,
            observations: dogobs,
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

export async function addRegm(dog_id: string, attendance_type: string, complaint: string, appearance: string, hydration_status: string, mucous: string, lymphs: string, suspicion: string, weight: string, temperature: string, anotation: string, diagnosis: string, forwarding: string, doctor: string, date: string, time: string, budget: string){
    await prisma.$connect();
    const dog = await prisma.medical.create({
        data: {
            dog_id: dog_id,
            attendance_type: attendance_type,
            complaint: complaint,
            appearance: appearance,
            hydration_status: hydration_status,
            mucous: mucous,
            lymphs: lymphs,
            suspicion: suspicion,
            weight: weight,
            temperature: temperature,
            anotation: anotation,
            diagnosis: diagnosis,
            forwarding: forwarding,
            doctor: doctor,
            date: date,
            time: time,
            budget: budget,
        }
    });
    await prisma.$disconnect();
}

// IMGUR FUNCTION
export async function uploadImage(image: string) {
    
    
}