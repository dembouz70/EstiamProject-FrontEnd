import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isConstructorDeclaration } from "typescript";
import Category from "../../models/category";

const RecetteCreate = () => {
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [temps_preparation, setTemps_preparation] = useState("");
    const [temps_cuisson, setTemps_cuisson] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [niveau, setNiveau] = useState("");
    const [category, setCategory] = useState<Category[]>([]);
    const [categoryId, setCategoryId] = useState(Number(""));
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/category").then((response) => {
            setCategory(response.data);
        });
    }, [])

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const recettesData = { titre, description, temps_preparation, temps_cuisson, ingredients, niveau}
        console.log(categoryId)
        fetch(`http://localhost:5000/recettes/create/${categoryId}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(recettesData)
        }).then((res) => {
            alert('Recette enregistrée !')
            navigate('/admin/recettes')
        }).catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card">
                            <div className="card-title">
                                <h2>Creer une nouvelle recette</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Categorie</label>
                                            <select className="form-select" required aria-label="Default select example" onChange={e => setCategoryId(Number(e.target.value))}>
                                                <option selected>Choisir la Categorie de recette</option>
                                                {
                                                    category.map((catg) =>
                                                        <option value={catg.id} className="form-control">{catg.titre_Cat}</option>)
                                                }
                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Titre</label>
                                            <input type="text" required value={titre} onChange={e => setTitre(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input type="text" required value={description} onChange={e => setDescription(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ingredients</label>
                                            <input type="text" required value={ingredients} onChange={e => setIngredients(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Temps_preparation</label>
                                            <input type="number" min="1" required value={temps_preparation} onChange={e => setTemps_preparation(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Temps_cuisson</label>
                                            <input type="number" min="1" required value={temps_cuisson} onChange={e => setTemps_cuisson(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Niveau</label>
                                            <input type="text" required value={niveau} onChange={e => setNiveau(e.target.value)} className="form-control" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to={"/admin/recettes"} className="btn btn-danger">BACK</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RecetteCreate;