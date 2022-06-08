import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { auth, requiresAuth } from 'express-openid-connect';
import { config } from "../auth/authConfig";

import { getDogs } from "../db/searchFunctions";
import { createDog } from "../db/postFunctions";

const app = express();
dotenv.config();
const prisma = new PrismaClient();

app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(auth(config));

const port = process.env.PORT || 3000;

// GET

// Returns all dogs
app.get("/", async (res, req) =>{
    const dogs = await getDogs();
    req.render("index.ejs", { dogs: dogs.content });
});

// Returns specific dog
// app.get("/dog/id/:id", async (req, res) => {
//     await prisma.$connect();
//     const dog = await getDog(req.params.id);
//     res.send(dog.content);
// });

// Returns dog-specific comments
// app.get("/dog/comments/id/:id", async (req, res) => {
//     await prisma.$connect();
//     const comments = await getComments(req.params.id);
//     res.send(comments.content);
// });

// Returns dog-specific Daily Status
// app.get("/dog/dailystatus/id/:id", async (req, res) => {
//     await prisma.$connect();
//     const daily = await getDaily(req.params.id);
//     res.send(daily.content);
// });

// Returns dog-specific Medical Status
// app.get("/dog/medicalstatus/id/:id", async (req, res) => {
//     await prisma.$connect();
//     const medical = await getMedical(req.params.id);
//     res.send(medical.content);
// });

// Sends testing information to database
app.get("/send", async (req, res) => {
    await prisma.$connect();
    const data = await createDog();
}); 

// POST

app.post("/add", requiresAuth(), (req, res) =>{

});



// Admin route 
app.get("/admin", requiresAuth(), async (req, res) => {
    const dogs = await getDogs();
    res.render("adminPage.ejs", { dogs: dogs.content });
    // console.log(req.body);
});

app.get("/admin/add", requiresAuth(), (req, res) => {
    res.render("test.ejs");
});



// Running
app.listen(port, () => {
    console.log( `Port: http://localhost:${ port }.` );
});