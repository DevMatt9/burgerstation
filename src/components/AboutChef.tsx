import { Container, Row, Col } from "react-bootstrap";
import "./AboutChef.css"; // Ajoute ce fichier si besoin de style personnalisé

const AboutChef = () => {
  return (
    <section className="py-5 bg-white" id="chef">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="video-square">
              <video className="w-100 h-100 object-fit-cover" autoPlay muted loop>
                <source src="/assets/aboutchef.mp4" type="video/mp4" />
                Votre navigateur ne prend pas en charge les vidéos.
              </video>
            </div>
          </Col>
          <Col md={6}>
            <h2>Les mots du chef</h2>
            <p>
              "Chez nous, chaque burger est une création. Mon idée ? Apporter une
              touche artisanale et généreuse, avec des produits frais, pour un goût
              unique. Derrière chaque recette, il y a une passion, un savoir-faire, et
              l’envie de faire plaisir."
            </p>
            <p className="fst-italic text-end">— John Burger Jr.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutChef;
