import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import HomeDesc from "../components/HomeDesc";
import Recettes from "../components/Recettes";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <>
            <Navbar />
            <Banner 
                titre = "Vos Recettes de cuisine"
                text = "Enregistrez vos recettes favorites"
                bannerImg = "https://images.pexels.com/photos/5701879/pexels-photo-5701879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                cName = "banner"
                url = "Recettes"
                btnClass = "voir"
            />
            <HomeDesc />
            <Recettes />
            <Footer />
        </>
    );
}
 
export default Home;