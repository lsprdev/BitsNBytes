import { Request, Response } from 'express';
import { getDogs, getDog } from "../../db/searchFunctions";
import { addDog, addRegd, addRegm } from "../../db/postFunctions";
import { dogDelete } from "../../db/deleteFunctions";

export const dogs = async (req: Request, res: Response) => {
    const dogs = await getDogs();
    res.json(dogs.content);
}

export const dog = async (req: Request, res: Response) => {
    const dog = await getDog(req.params.dog_id);
    res.json(dog.content);
}

export const dogadd = async (req: Request, res: Response) => {
    const dog = await addDog(req.body.dogphoto, req.body.dogname, req.body.dogage, req.body.dogweight, req.body.dogdesc, req.body.dogowner, req.body.is_adoptable);
    res.redirect("http://localhost:8080/admin");

}


export const dogdelete = async (req: Request, res: Response) => {
    const dog = await dogDelete(req.params.dog_id);
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





