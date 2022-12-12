import { Link } from "react-router-dom";
import "./Navbar-style.css";

const Navbar = () => {
    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Recettes</h1>

            <ul className="nav-menu">
                <li>
                    <a href="/">
                    <i className="fa-solid fa-house-chimney"></
                    i>Home</a>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;