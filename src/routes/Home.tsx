import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <Banner 
                titre = "Vos Recettes de cuisine"
                text = "Enregistrez vos recettes favorites"
                bannerImg = "https://images.pexels.com/photos/10549644/pexels-photo-10549644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                cName = "banner"
                url = "Recettes"
                btnClass = "voir"
            />
        </>
    );
}
 
export default Home;