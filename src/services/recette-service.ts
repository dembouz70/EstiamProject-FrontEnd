import axios from "axios";
import Recette from "../models/recettes";

const RECETTE_API_BASE_URL = "http://localhost:5000/recettes";
    class RecetteService {

    static async searchRecette(term: string): Promise<Recette[]> {
        try {
            const response = await axios.get(RECETTE_API_BASE_URL, {
                params: { q: term }
            });
            return response.data;
        } catch (error) {
            return RecetteService.handleError(error);
        }
    }
    static handleError(error: unknown): Recette[] | PromiseLike<Recette[]> {
        throw new Error("Method not implemented.");
    }

    
}

export default new RecetteService()