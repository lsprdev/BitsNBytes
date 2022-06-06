import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { auth, requiresAuth } from 'express-openid-connect'

import { getDogs, getDog, getComments, getDaily, getMedical } from "../db/searchFunctions";

const app = express();
dotenv.config();
const prisma = new PrismaClient()

app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 3000;

// GET

app.get("/", async (res, req) =>{
    const dogs = await getDogs();
    req.render("index.ejs", { dogs: dogs.content });
});

app.get("/dog/id/:id", async (req, res) => {
    await prisma.$connect();
    const dog = await getDog(req.params.id);
    res.send(dog.content);
});

app.get("/dog/comments/id/:id", async (req, res) => {
    await prisma.$connect();
    const comments = await getComments(req.params.id);
    res.send(comments.content);
});

// Transformar em função(db/searchFunctions.ts)
app.get("/dog/dailystatus/id/:id", async (req, res) => {
    await prisma.$connect();
    const daily = await getDaily(req.params.id);
    res.send(daily.content);
});
// Transformar em função(db/searchFunctions.ts)
app.get("/dog/medicalstatus/id/:id", async (req, res) => {
    await prisma.$connect();
    const medicalstatus = await prisma.medicalStatus.findMany({
        where: {
            dog_id: req.params.id
        }
    });
    res.send(medicalstatus);
});

// Teste para enviar informações para o banco de dados
app.get("/send", async (req, res) => {
    await prisma.$connect();
    const data = await createDog();
}); 

async function createDog() {
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

// Auth0

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUERURL
  };

app.use(auth(config));

app.get("/admin", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});


// Running

app.listen(port, () => {
    console.log( `Port: http://localhost:${ port }.` );
});