import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const About = () => {
    return ( 
        <>
            <Navbar />
            <Banner 
                titre = "A propos"
                bannerImg = "https://images.pexels.com/photos/7199552/pexels-photo-7199552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                cName = "banner-demi"
                btnClass = "hide"
            />
        </>
    );
}
 
export default About;