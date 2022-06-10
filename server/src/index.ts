import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { auth, requiresAuth } from 'express-openid-connect';
import { config } from "../auth/authConfig";

import * as home from './controllers/home.controller';

import { getDogs } from "../db/searchFunctions";
import { addDog } from "../db/postFunctions";

const app = express();
dotenv.config();
const prisma = new PrismaClient();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(auth(config));

const port = process.env.PORT || 3000;

// GET

// Returns all dogs
app.get("/", home.index);

// POST

app.post("/add", requiresAuth(), home.add);

// Admin route 
app.get("/admin", requiresAuth(), async (req, res) => {
    const dogs = await getDogs();
    res.render("adminPage.ejs", { dogs: dogs.content });
    // console.log(req.body);
});

// Running
app.listen(port, () => {
    console.log( `Port: http://localhost:${ port }.` );
});