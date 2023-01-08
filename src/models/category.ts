export default class Category {
    id: number;
    titre_Cat: string;
    catdescription: string;
     
    // 2. Définition des valeurs par défaut des propriétés d'une recette.
    constructor(
        id: number, titre_Cat: string, catdescription: string
    ) {
        this.id = id
        this.titre_Cat = titre_Cat
        this.catdescription = catdescription
    }
}