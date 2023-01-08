import Recette from "./recettes";

export default class Etape {
    id: number;
    description: string;
    ordre: number;
    recette: Recette;
    
    constructor(
        id: number, description: string, ordre: number, recette: Recette
    ) {
        this.id = id;
        this.description = description;
        this.ordre = ordre;
        this.recette = recette;
    }
}