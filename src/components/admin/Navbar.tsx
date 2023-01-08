import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand me-2" href="https://mdbgo.com/">
                    <h2>Admin</h2>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/admin/recettes">
                                <h6 className="nav-link">Recettes</h6>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/category">
                                <h6 className="nav-link">Categories</h6>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/users">
                                <h6 className="nav-link">Users</h6>
                            </Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-danger me-3">
                            Deconnexion
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default AdminNavbar;