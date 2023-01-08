import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import Recette from "../models/recettes";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../components/RecetteDetails.css";
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
                {recette ? (
                    <div className="recettecontainer2">
                        <div className="r2">
                            <div className="recettecard2">
                                    <img src="https://images.pexels.com/photos/14265377/pexels-photo-14265377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Lago di Braies" />
                                
                                <div className="name2">{recette.titre}</div>
                                <p>
                                    {recette.description}
                                </p>
                                <hr />
                                <p><strong>Temps de preparation (en min)</strong> : {recette.temps_preparation}</p>
                                <hr />
                                <p><strong>Temps de cuisson (en min)</strong> : {recette.temps_cuisson}</p>
                                <hr />
                                <p><strong>Niveau de difficulté</strong> : {recette.niveau}</p>
                                <hr />
                                <p><strong>Ingredients</strong> : - {recette.ingredients}</p>
                                
                            </div>
                        </div>
                    </div>
                    
                ) : (
                    <h4 className="center">Aucune recette à afficher !</h4>
                )}
            <Footer />
        </>
    );
}

export default RecetteDetails;