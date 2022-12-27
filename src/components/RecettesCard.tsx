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
                        <img src={recette.image} alt="Lago di Braies" />
                    </Link>
                    <span className="tag">Nature</span>
                    <span className="tag">Lake</span>
                    <div className="name">{recette.name}</div>
                    <p>
                        {recette.text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RecettesCard;