import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import * as api from "././controllers/api.controller";

const app = express();
dotenv.config();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const port = process.env.PORT || 3000;

// ============================================================
// FOR API

// GET
app.get("/api/dogs", api.dogs);
app.get("/api/dog/:dog_id", api.dog);
app.get("/api/adoptable", api.dogadoptable);


// POST
app.post("/api/dogadd", api.dogadd);
app.post("/api/dogupdate/:dog_id", api.dogupdate);

app.post("/api/dogdel/:dog_id", api.dogdelete);


// app.post("/api/commentadd/:dog_id", api.commentadd);
app.post("/api/regdAdd/:dog_id", api.regdAdd);
app.post("/api/regmAdd/:dog_id", api.regmAdd);


// END -- FOR API
// ============================================================

// Running
app.listen(port, () => {
    console.log( `Port: http://localhost:${ port }.` );
});