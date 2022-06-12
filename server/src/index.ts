import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { auth, requiresAuth } from 'express-openid-connect';
import { config } from "../auth/authConfig";

import * as ejs from "././controllers/ejs.controller";
import * as api from "././controllers/api.controller";

const app = express();
dotenv.config();
const prisma = new PrismaClient();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(auth(config));

const port = process.env.PORT || 3000;

// ============================================================
// FOR EJS VIEWS 

// GET
// Returns all dogs
app.get("/", ejs.index);
// Admin route 
app.get("/admin", requiresAuth(), ejs.admin);
// POST
app.post("/add", requiresAuth(), ejs.add);
// END -- FOR EJS VIEWS 

// ============================================================
// ============================================================
// FOR API

// GET
app.get("/api/dogs", api.dogs);
app.get("/api/dog/:dog_id", api.dog);

// POST
app.post("/api/dogadd", api.dogadd);
// app.post("/api/dogupdate/:dog_id", api.dogupdate);
// app.post("/api/dogdelete/:dog_id", api.dogdelete);


// END -- FOR API
// ============================================================

// Running
app.listen(port, () => {
    console.log( `Port: http://localhost:${ port }.` );
});