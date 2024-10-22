import { Request, Response } from "express";
import { publicCharacters } from "../services/userService";


export const allCharacters = async (req: Request, res: Response) => {

    const user = await publicCharacters();
    if (user) {
        const characters = user.data.results.map(a => `personaje ${a.name}`)
        res.status(200).json(characters);
    } else {
        console.log("Error al hacer la peticion")
    }
};


