import { Request, Response } from "express";
import { publicCharacters } from "../services/userService";


export const allCharacters = async (req: Request, res: Response) => {

    const charactersAll = await publicCharacters();
    if (charactersAll.success) {
        res.status(200).json(charactersAll);
    } else {
        res.status(500).json({ Error: charactersAll })
    }
};


