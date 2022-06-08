import { response } from "../lib/responseConstructor";
import PrismaImport from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createDog() {
    await prisma.$connect();
    const dog = await prisma.dog.create({
        data: {
            photo: "https://i.imgur.com/vMfgNE6.jpg",
            name: "Rogério",
            age: 1,
            weight: 1, //change to string
            description: "Gente boa 3.0",
            owner_name: "Gabriel Lopes Pereira",
            daily_status: [
                {
                    date: "2020-06-01",
                    status: "Dormindo",
                    text: "Fumaça está dormindo",
                },
            ],
            medical_status: [
                {
                    date: "2020-06-01",
                    status: "Vacinado",
                    text: "Fumaça está vacinado",      
                }
            ],
            comments: [
                {   
                    author_name: "Gabriel",
                    author_class: "4INFO",
                    author_year: "3",
                    date: "2020-06-01", 
                    text: "Vi ele noauditório",
                }   
            ]
            }
    });
};
