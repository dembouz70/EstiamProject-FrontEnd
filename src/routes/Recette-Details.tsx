import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Recette from "../models/recettes";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from 'axios';


const RecetteDetails: FunctionComponent = () => {
    const [recette, setRecette] = useState<Recette | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        axios.get<Recette[]>("http://localhost:5000/recettes").then((response) => {
            const RECETTE = response.data;
            
            RECETTE.forEach(r => {
                if (id === r.id.toString()) {
                    setRecette(r);
                }
            })
        });
        
    }, [id])

    return (
        <>
            <Navbar />
            <div>
                {recette ? (
                    <div className="row">
                        <div className="col s12 m8 offset-m2">
                            <h2 className="header center">{recette.titre}</h2>
                            <div className="card hoverable">
                                <div className="card-image">
                                    <img src={recette.titre} alt={recette.titre} style={{ width: '250px', margin: '0 auto' }} />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <table className="bordered striped">
                                            <tbody>
                                                <tr>
                                                    <td>Nom</td>
                                                    <td><strong>{recette.titre}</strong></td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="card-action">
                                        <Link to="/">Retour</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h4 className="center">Aucune recette à afficher !</h4>
                )}
            </div>
            <Footer />
        </>
    );
}

export default RecetteDetails;