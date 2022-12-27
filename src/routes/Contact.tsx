import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
    return ( 
        <>
            <Navbar />
                <Banner 
                    titre = "Contactez-nous"
                    bannerImg = "https://images.pexels.com/photos/5701845/pexels-photo-5701845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    cName = "banner-demi"
                    btnClass = "hide"
                />
            <h1>Contact PAGE</h1>
            <Footer />
        </>
    );
}
 
export default Contact;