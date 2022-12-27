export default class Recette {
    // 1. Typage des propiétés d'une recette.
    id: number;
    name: string;
    text: string;
    image: string;
     
    // 2. Définition des valeurs par défaut des propriétés d'une recette.
    constructor(
        id: number,
        name: string = 'name',
        text: string = 'text',
        image: string = 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ) {
    // 3. Initialisation des propiétés d'une recette.
        this.id = id;
        this.name = name;
        this.text = text;
        this.image = image;
    }
}