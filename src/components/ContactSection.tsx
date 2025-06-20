import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactSection = () => {
  return (
    <section className="py-5 bg-light" id="contact">
      <Container>
        <Row>
          <Col md={6}>
            <iframe
              src="https://www.google.com/maps?q=43.3915029,5.3378962&z=16&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Notre emplacement"
            ></iframe>
          </Col>
          <Col md={6}>
            <h3>Nous contacter</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Votre nom" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Votre email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Envoyer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
