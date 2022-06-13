import { Request, Response } from 'express';
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

//addPage for ejs
export const add = async (req: Request, res: Response) => {
    res.render("addPage.ejs");
}

//POST
// ("/add_dog" route) ejs template
export const add_dog = async (req: Request, res: Response) => {
    const data = await addDog(req.body.dogphoto, req.body.dogname, req.body.dogage, req.body.dogweight, req.body.dogdesc, req.body.dogowner);
    res.redirect("/admin");
};
