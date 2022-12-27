import { Link } from "react-router-dom";
import "./HomeDesc.css";

const Recette = () => {
    return ( 
        <div className="recette">
            <h1>Les Plus vues</h1>
            <p>Ces recettes vous sont presentées par les plus grands experts en cuisine</p>

            <div className="first-desc">
                <div className="desc-text">
                    <h2>LES TEMPS CHAUDS</h2>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content 
                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
                        more-or-less normal distribution of letters, as opposed to using 'Content here, 
                        content here', making it look like readable English. Many desktop publishing packages 
                        and web page editors now use Lorem Ipsum as their default model text, and a search for.
                    </p>
                    <button>Voir Plus ➔</button>
                </div>
                <div className="desc-image">
                    <img src="https://images.pexels.com/photos/14265377/pexels-photo-14265377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
            </div>

            <div className="second-desc">
                <div className="desc-text">
                    <h2>LES TEMPS CHAUDS</h2>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content 
                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
                        more-or-less normal distribution of letters, as opposed to using 'Content here, 
                        content here', making it look like readable English. Many desktop publishing packages 
                        and web page editors now use Lorem Ipsum as their default model text, and a search for 
                        'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
                        evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </div>
                <div className="desc-image">
                    <img src="https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default Recette;