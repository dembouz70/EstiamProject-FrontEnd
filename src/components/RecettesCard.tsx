import { FunctionComponent } from "react";
import Recepie from "../models/recettes";
import { Link, useLocation } from 'react-router-dom';

type Props = {
    recette : Recepie
}
const RecettesCard : FunctionComponent<Props> = ({recette}) => {


    return (
        <div className="recettecontainer">
            <div className="r">
                <div className="recettecard">
                    <Link to={`/Recettes/${recette.id}`}>
                        <img src="https://images.pexels.com/photos/14265377/pexels-photo-14265377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Lago di Braies" />
                    </Link>
                    <span className="tag">{recette.category.titre_Cat}</span>
                    <div className="name">{recette.titre}</div>
                    <p>
                        {recette.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RecettesCard;