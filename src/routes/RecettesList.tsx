import { FunctionComponent, useEffect, useState } from "react";
import Recette from "../models/recettes";

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RecettesCard from "../components/RecettesCard";
import axios from "axios";
import "../components/Search.css"
import { Link } from "react-router-dom";

const RecettesList: FunctionComponent = () => {
    const [recettes, setRecettes] = useState<Recette[]>([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
        axios.get("http://localhost:5000/recettes/recetteCatg").then((response) => {
            setRecettes(response.data);
        });
    }, [])

    console.log(recettes)
    return ( 
        <>
            <Navbar />
                <Banner 
                    titre = "Recettes"
                    bannerImg = "https://images.pexels.com/photos/4911845/pexels-photo-4911845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    cName = "banner-demi"
                    btnClass = "hide"
                />
                
                <div className="appli">
                    <input type="text" placeholder="rechercher..." className="search" onChange={(e) => setQuery(e.target.value)}/>
                </div>
                {
                    recettes.filter(recette=>recette.titre.toLowerCase().includes(query)).map((r) =>
                    <RecettesCard
                        key={r.id}
                        recette = {r}
                    />
                    )
                }
                
            <Footer />
        </>
    );
}
 
export default RecettesList;