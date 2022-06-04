"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_openid_connect_1 = require("express-openid-connect");
const prisma = new client_1.PrismaClient();
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (res, req) => {
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
app.use((0, express_openid_connect_1.auth)(config));
app.get('/profile', (0, express_openid_connect_1.requiresAuth)(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}.`);
});
