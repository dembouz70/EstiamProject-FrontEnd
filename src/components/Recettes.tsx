import RecettesCard from "./RecettesCard";
import "./Recettes.css";
import RecettesList from "../routes/RecettesList";
import { Link } from "react-router-dom";

const SearchBar = () => {
    return (
        <div className="recette">
            <h1>Recent Recepies</h1>
            <p>Lorem Ipsum est un texte d'espace réservé</p>
            <Link to={"/Recettes"}><button>Voir Nos Recettes ➔</button></Link>
        </div>


    );
}

export default SearchBar;