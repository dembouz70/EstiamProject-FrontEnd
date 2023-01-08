import { useEffect, useState } from "react";
import Users from "../../models/users";
import AdminNavbar from "./Navbar";
const AdminUsers = () => {
    const [users, setUsers] = useState<Users[] | null>(null); useEffect(() => {
        fetch("http://localhost:5000/user").then((res) => {
            return res.json();
        }).then((resp) => {
            setUsers(resp)
            console.log(resp)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    const Remove = (id:number) => {
        if(window.confirm('Veux-tu vraiment supprimer ?')) {
            fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE"
        }).then((res) => {
            alert('Utilisateur supprimé !')
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
                        <h5>LISTE DES UTILISATEURS</h5>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <td>ID</td>
                                    <td>NOM</td>
                                    <td>EMAIL</td>
                                    <td>ACTION</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users ? (
                                        users.map(item => (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <a onClick={()=>{Remove(item.id)}} className="btn btn-danger">Supprimer</a>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <h5>aucun utilisatueur !</h5>
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

export default AdminUsers;