import { useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Category from "../../models/category";
import Recette from "../../models/recettes";
import AdminNavbar from "./Navbar";
const AdminCategoy = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[] | null>(null); useEffect(() => {
        fetch("http://localhost:5000/category").then((res) => {
            return res.json();
        }).then((resp) => {
            setCategories(resp)
            console.log(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    const Remove = (id:number) => {
        if(window.confirm('Veux-tu vraiment supprimer ?')) {
            fetch(`http://localhost:5000/category/${id}`, {
            method: "DELETE"
        }).then((res) => {
            alert('Categorie supprimée !')
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
                            <Link className="btn btn-success" to={"/admin/category/create"}>
                                AJOUTER UNE NOUVELLE CATEGORIE DE RECETTE(+)
                            </Link>
                        </div>
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>TITRE CATEGORIE</td>
                                    <td>DESCRIPTION</td>
                                    <td>ACTION</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    categories ? (
                                        categories.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.titre_Cat}</td>
                                                <td>{item.catdescription}</td>
                                                <td>
                                                    <a onClick={()=>{Remove(item.id)}} className="btn btn-danger">Supprimer</a>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <h5>aucune categorie !</h5>
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

export default AdminCategoy;