import { Link } from "react-router-dom";
import "./Navbar-style.css";
import { MenuItems } from "./MenuItems";
import { useState } from "react";

const Navbar = () => {
    let [clicked, setState] = useState(false);

    const handleClick = () => {
        setState(clicked = !clicked)
    }

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Recettes</h1>

            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></
                            i>{item.titre}</Link>
                        </li>
                    )
                })}
                
            </ul>
            <button>SignUp</button>
        </nav>
    );
}
export default Navbar;