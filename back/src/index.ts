import { PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import { auth, requiresAuth } from 'express-openid-connect'

const prisma = new PrismaClient()
dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (res, req) =>{
    req.send("Hello");
});



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

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});
  

app.listen(port, () => {
    console.log( `Server started at http://localhost:${ port }.` );
});