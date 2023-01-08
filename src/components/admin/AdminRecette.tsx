import { useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Recette from "../../models/recettes";
import AdminNavbar from "./Navbar";
const AdminRecette = () => {
    const navigate = useNavigate();
    const [recettes, setRecettes] = useState<Recette[] | null>(null); useEffect(() => {
        fetch("http://localhost:5000/recettes/recetteCatg").then((res) => {
            return res.json();
        }).then((resp) => {
            setRecettes(resp)
            console.log(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    const Remove = (id:number) => {
        if(window.confirm('Veux-tu vraiment supprimer ?')) {
            fetch(`http://localhost:5000/recettes/${id}`, {
            method: "DELETE"
        }).then((res) => {
            alert('Recette supprimée !')
        }).catch((err) => {
            console.log(err.message)
        })
        }
    }

    return (
        <>
            <AdminNavbar />
        <div className="App">
            <div className="container">
                <div className="card">
                    <div className="card-title">
                        
                    </div>
                    <div className="card-body">
                        <div className="divbtn">
                            <Link className="btn btn-success" to={"/admin/recettes/create"}>
                                AJOUTER UNE NOUVELLE RECETTE(+)
                            </Link>
                        </div>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>TITRE</td>
                                    <td>TEMPS_PREPARATION</td>
                                    <td>TEMPS_CUISSON</td>
                                    <td>NIVEAU</td>
                                    <td>CATEGORIE RECETTE</td>
                                    <td>ACTION</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    recettes ? (
                                        recettes.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.titre}</td>
                                                <td>{item.temps_preparation}</td>
                                                <td>{item.temps_cuisson}</td>
                                                <td>{item.niveau}</td>
                                                <td>{item.category.titre_Cat}</td>
                                                <td>
                                                    <a onClick={()=>{Remove(item.id)}} className="btn btn-danger">Supprimer</a>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <h5>aucune recette</h5>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
        

    );

}

export default AdminRecette;