import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Container, Card } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <Navbar />
            <Banner
                titre="A propos"
                bannerImg="https://images.pexels.com/photos/7199552/pexels-photo-7199552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                cName="banner-demi"
                btnClass="hide"
            />
            <Container>
                <h1>À propos de nous</h1>
                <p>Nous sommes une entreprise spécialisée dans la fourniture de services de qualité à nos clients. Nous avons été créés en 2010 et depuis, nous avons travaillé dur pour construire une réputation solide dans notre industrie.</p>
                <Card>
                    <Card.Body>
                        <Card.Title>Notre mission</Card.Title>
                        <Card.Text>Notre mission est de fournir à nos clients les meilleurs services possibles, tout en veillant à leur satisfaction totale.</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Notre vision</Card.Title>
                        <Card.Text>Notre vision est de devenir le leader de notre industrie en proposant des solutions innovantes et en dépassant les attentes de nos clients.</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Notre équipe</Card.Title>
                        <Card.Text>Notre équipe est composée de professionnels expérimentés et passionnés par leur travail. Nous travaillons ensemble pour atteindre nos objectifs et garantir la satisfaction de nos clients.</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer />
        </>

    );
}

export default About;