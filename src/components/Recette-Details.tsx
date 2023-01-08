import { FunctionComponent, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Recette from "../models/recettes";
import axios from 'axios';
import Loader from './loader';
import Etape from '../models/etapes';

type Props = {
    titre: string,
    description: string,
    temps_preparation: number,
    ingredients: string,
    ordreEtape: number,
    EtapeDescription: string,
}
const RecetDetails: FunctionComponent<Props> = (recette) => {
    return (
        <div>
            {recette ? (
                <div className="row">
                    <div className="col s12 m8 offset-m2">
                        <h2 className="header center">{recette.titre}</h2>
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src="https://images.pexels.com/photos/4911845/pexels-photo-4911845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={recette.titre} style={{ width: '250px', margin: '0 auto' }} />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <table className="bordered striped">
                                        <tbody>
                                            <tr>
                                                <td>Nom</td>
                                                <td><strong>{recette.titre}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Description</td>
                                                <td><strong>{recette.description}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Temps de preparation</td>
                                                <td><strong>{recette.temps_preparation} min</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Ingredients</td>
                                                <td><strong>{recette.ingredients}</strong></td>
                                            </tr>

                                            <tr>
                                                <td>Etapes de preparation</td>
                                                <td>
                                                    <ul>
                                                        <li><strong>{recette.ordreEtape}</strong></li>
                                                        <li><strong>{recette.EtapeDescription}</strong></li>
                                                    </ul>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-action">
                                    <Link to="/Recettes">Retour</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h4 className="center"><Loader /></h4>
            )}
        </div>
    );
}

export default RecetDetails;