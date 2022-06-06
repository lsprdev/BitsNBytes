import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { auth, requiresAuth } from 'express-openid-connect'

import { getDogs } from "../db/searchFunctions";

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

// Transformar em função(db/searchFunctions.ts)
app.get("/dog/id/:id", async (req, res) => {
    await prisma.$connect();
    const dog = await prisma.dog.findUnique({
        where: {
            id: req.params.id
        }
    });
    res.send(dog);
});
// Transformar em função(db/searchFunctions.ts)
app.get("/dog/comments/id/:id", async (req, res) => {
    await prisma.$connect();
    const comment = await prisma.comment.findMany();
    for (let i = 0; i < comment.length; i++) {
        if (comment[i].dog_id === req.params.id) {
            res.send(comment[i]);
        }
    }
});
// Transformar em função(db/searchFunctions.ts)
app.get("/dog/dailystatus/id/:id", async (req, res) => {
    await prisma.$connect();
    const comment = await prisma.dailyStatus.findMany();
    for (let i = 0; i < comment.length; i++) {
        if (comment[i].dog_id === req.params.id) {
            res.send(comment[i]);
        }
    }
});
// Transformar em função(db/searchFunctions.ts)
app.get("/dog/medicalstatus/id/:id", async (req, res) => {
    await prisma.$connect();
    const comment = await prisma.medicalStatus.findMany();
    for (let i = 0; i < comment.length; i++) {
        if (comment[i].dog_id === req.params.id) {
            res.send(comment[i]);
        }
    }
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
            name: "Maicon",
            age: 2,
            weight: 20,
            description: "Gente boa",
            owner_name: "João da Silva",
            daily_status: {
                create: {
                    date: new Date(),
                    text: "Tudo bem"
                }
            },
            medical_status: {
                create: {
                    date: new Date(),
                    text: "Tudo bem"
                }
            },
            comments: {
                create: {
                    author_name: "João da Silva",
                    author_class: "3INFO",
                    author_year: "3",
                    date: new Date(),
                    text: "Tudo bem"
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