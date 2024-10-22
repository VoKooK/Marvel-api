import axios from "axios";
import { allCharactersModel } from "../models/userModel";
import { generateHash, generateUniqueCode } from "../utils/generateUniqueCodes";


export const publicCharacters = async (): Promise<allCharactersModel | undefined> => {

    const code = generateUniqueCode()
    const hash = generateHash(code)
    
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://gateway.marvel.com/v1/public/characters?ts=${code}&apikey=${process.env.PUBLIC_API_KEY}&hash=${hash}`,
        headers: {}
    };
    try {
        const response = await axios.request<allCharactersModel>(config);
        const data: allCharactersModel = response.data
        return data;
    } catch (error) {
        return undefined;
    }
};
