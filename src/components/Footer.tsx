import "./Footer.css"

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Recettes</h1>
                    <p>Choisissez vos recettes favoris</p>
                </div>

                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Projects</h4>
                    <a href="/">Licences</a>
                    <a href="/">Versions</a>
                    <a href="/">Statuts</a>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;