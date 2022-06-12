import { Request, Response } from 'express';
import express from 'express';
import { auth, requiresAuth } from 'express-openid-connect';
import { getDogs } from "../../db/searchFunctions";
import { addDog } from "../../db/postFunctions";

// GET
// ("/" route) for ejs 
export const index = async (req: Request, res: Response) => {
    const dogs = await getDogs();
    res.render("index.ejs", { dogs: dogs.content });
}
// ("/admin" route) for ejs 
export const admin = async (req: Request, res: Response) => {
    const dogs = await getDogs();
    res.render("adminPage.ejs", { dogs: dogs.content });
}

//POST
// ("/add" route) ejs template
export const add = async (req: Request, res: Response) => {
    const data = await addDog(req.body.dogphoto, req.body.dogname, req.body.dogage, req.body.dogweight, req.body.dogdesc, req.body.dogowner);
    res.redirect("/admin");
};
