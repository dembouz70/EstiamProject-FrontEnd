import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Recettes = () => {
    return ( 
        <>
            <Navbar />
                <Banner 
                    titre = "Recettes"
                    bannerImg = "https://images.pexels.com/photos/4911845/pexels-photo-4911845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    cName = "banner-demi"
                    btnClass = "hide"
                />
            <h1>Recttes PAGE</h1>
        </>
    );
}
 
export default Recettes;