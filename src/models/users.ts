import Recette from "./recettes";

export default class Users {
    id: number;
    name: string;
    email: string;
    
    constructor(
        id: number, name: string, email: string
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}