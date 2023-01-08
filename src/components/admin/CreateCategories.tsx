import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoryCreate = () => {
    const [titre_Cat, setTitreCat] = useState("");
    const [catdescription, setCatDescription] = useState("");
    const navigate = useNavigate();

    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const CatgData = { titre_Cat, catdescription }
        fetch(`http://localhost:5000/category/create`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(CatgData)
        }).then((res) => {
            alert('Categorie de recette enregistrée !')
            navigate('/admin/category')
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
                                <h2>Creer une nouvelle categorie de recette</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Titre Categorie</label>
                                            <input type="text" required value={titre_Cat} onChange={e => setTitreCat(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input type="text" required value={catdescription} onChange={e => setCatDescription(e.target.value)} className="form-control" />
                                        </div>
                                    </div>
                                    

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to={"/admin/category"} className="btn btn-danger">BACK</Link>
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

export default CategoryCreate;