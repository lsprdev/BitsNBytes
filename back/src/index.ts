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
app.get("/dog/:id", async (req, res) => {
    await prisma.$connect();
    const dog = await prisma.dog.findUnique({
        where: {
            id: req.params.id
        }
    })
    res.send(dog);
});

// POST



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