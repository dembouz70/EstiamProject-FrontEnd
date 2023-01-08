import { useState } from "react";
import "./Recettes.css";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    console.log()
    return (
        <div className="appli">
            <input type="text" placeholder="Search..." className="search" onChange={(e) => setQuery(e.target.value)}/>
        </div>
    );
}

export default SearchBar;