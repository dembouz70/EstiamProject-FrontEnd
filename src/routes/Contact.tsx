import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Contact = () => {
    return ( 
        <>
            <Navbar />
                <Banner 
                    titre = "Contactez-nous"
                    bannerImg = "https://images.pexels.com/photos/7758253/pexels-photo-7758253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    cName = "banner-demi"
                    btnClass = "hide"
                />
            <h1>Contact PAGE</h1>
        </>
    );
}
 
export default Contact;