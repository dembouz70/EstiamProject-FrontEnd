export default class Recette {
    // 1. Typage des propiétés d'une recette.
    id: number;
    titre: string;
    description: string;
    temps_preparation: number;
    temps_cuisson : number;
    niveau: string;
     
    // 2. Définition des valeurs par défaut des propriétés d'une recette.
    constructor(
        id: number,
        titre: string = 'titre',
        description: string = 'description',
        temps_preparation: number,
        temps_cuisson: number,
        niveau: string

    ) {
    // 3. Initialisation des propiétés d'une recette.
        this.id = id;
        this.titre = titre;
        this.description = description;
        this.temps_preparation = temps_preparation;
        this.temps_cuisson = temps_cuisson;
        this.niveau = niveau
    }
}