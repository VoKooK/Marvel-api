import axios from "axios";
import { allCharactersModel, ApiResponseModel } from "../models/userModel";
import { generateHash, generateUniqueCode } from "../utils/generateUniqueCodes";
import { getErrorMessage } from "../utils/errorCodess";


export const publicCharacters = async (): Promise<ApiResponseModel<allCharactersModel>> => {

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

        //retorna la data
        return { success: true, data };
        
    } catch (error: any) {
        let errorMessage = 'Error desconocido';
        // Si hay una respuesta del servidor con código de estado
        if (error.response) {
            const statusCode = error.response.status;
            errorMessage = getErrorMessage(statusCode);
        } else {
            // Error sin respuesta del servidor (problemas de red, etc.)
            errorMessage = error.message;
        }
        // Retornamos un objeto indicando el error
        return {
            success: false,
            error: errorMessage
        };
    }
};
