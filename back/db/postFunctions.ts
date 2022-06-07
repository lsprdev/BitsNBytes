import { response } from "../lib/responseConstructor";
import PrismaImport from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createDog() {
    await prisma.$connect();
    const dog = await prisma.dog.create({
        data: {
            name: "Fumaça",
            age: 3,
            weight: 5, //change to string
            description: "Fumaça é um cachorro muito fofo",
            owner_name: "João Felipi",
            daily_status: {
                create: [
                    {
                        date: new Date(),
                        text: "Hoje o cachorro está muito feliz",
                    },
                    {
                        date: new Date(),
                        text: "Hoje o cachorro está mais feliz que ontem",
                    }
                ]
            },
            medical_status: {
                create: {
                    date: new Date(),
                    text: "Vacinas aplicadas"
                }
            },
            comments: {
                create: {
                    author_name: "Gabriel Lopes Pereira",
                    author_class: "4INFO",
                    author_year: "3",
                    date: new Date(),
                    text: "Vi ele hoje no auditório"
                }
            }
    }});
}