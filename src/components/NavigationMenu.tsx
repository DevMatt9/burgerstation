import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-cheddar" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="menu-title" href="#accueil">Accueil</Nav.Link>
            <Nav.Link className="menu-title" href="#carte">La Carte</Nav.Link>
          </Nav>

          <Navbar.Brand className="mx-auto">
            <img src="assets/logo-burger.png" alt="Burger Logo" height="128" />
          </Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link className="menu-title" href="#chef">Le Chef</Nav.Link>
            <Nav.Link className="menu-title" href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="promo-banner d-flex justify-content-between align-items-center px-4 py-2">
        <span className="text-white">
          🔥 Promo du moment : 2 menus burger achetés = 1 glace offerte !
        </span>
        <Button
          href="https://www.ubereats.com/"
          target="_blank"
          className="btn-ubereats"
        >
          🥤🍔🍟 Commandez sur Uber Eats
        </Button>
      </div>
    </>
  );
};

export default NavigationMenu;
