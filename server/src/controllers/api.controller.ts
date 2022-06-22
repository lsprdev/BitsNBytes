import { Request, Response } from 'express';
import { getDogs, getDog } from "../../db/searchFunctions";
import { addDog, addRegd, addRegm, deleteDog, updateDog } from "../../db/postFunctions";

export const dogs = async (req: Request, res: Response) => {
    const dogs = await getDogs();
    res.json(dogs.content);
}

export const dog = async (req: Request, res: Response) => {
    const dog = await getDog(req.params.dog_id);
    res.json(dog.content);
}

export const dogadd = async (req: Request, res: Response) => {
    const r = req.body;
    const dog = await addDog(r.dogphoto, r.dogname, r.doggender,r.dogfur, r.dogtemp, r.dogage, r.dogweight, r.dogdesc, r.dogowner, r.is_castrated, r.is_adoptable, r.dogobs);
    res.redirect("http://localhost:8080/admin");

}

export const dogdelete = async (req: Request, res: Response) => {
    const dog = await deleteDog(req.params.dog_id);
    res.json(dog)
}

export const dogupdate = async (req: Request, res: Response) => {
    const r = req.body;
    const dog = await updateDog(req.params.dog_id, r.dogphoto, r.dogname, r.doggender,r.dogfur, r.dogtemp, r.dogage, r.dogweight, r.dogdesc, r.dogowner, r.is_castrated, r.is_adoptable, r.dogobs);
    res.redirect("http://localhost:8080/admin");
}


export const regdAdd = async (req: Request, res: Response) => {
    const dog = await addRegd(req.params.dog_id, req.body.desc);
    res.redirect("http://localhost:8080/admin");

}

export const regmAdd = async (req: Request, res: Response) => {
    const dog = await addRegm(req.params.dog_id, req.body.desc);
    res.redirect("http://localhost:8080/admin");
}





