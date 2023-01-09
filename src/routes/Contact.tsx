import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Form, Button } from 'react-bootstrap';
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // envoyer les données du formulaire à votre backend ici
    }

    return (
        <>
            <Navbar />
            <Banner
                titre="Contactez-nous"
                bannerImg="https://images.pexels.com/photos/5701845/pexels-photo-5701845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                cName="banner-demi"
                btnClass="hide"
            />

            <div className="container mt-5">
                <h1>Page de contact</h1>
                <p>Vous pouvez nous contacter en remplissant le formulaire ci-dessous :</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" placeholder="Entrez votre nom" value={name} onChange={(event) => setName(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Entrez votre adresse email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} value="Messge de contact" onChange={(event) => setMessage(event.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Envoyer
                    </Button>
                </Form>
            </div>
            <Footer />
        </>
    );
}

export default Contact;