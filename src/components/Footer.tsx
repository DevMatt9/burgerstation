import { Container } from "react-bootstrap";
import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p className="mb-2">
          🚇 <strong>La Station Burger</strong> — des burgers qui font voyager vos papilles 🍔✈️
        </p>
        <div className="mb-3">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaTiktok size={24} />
          </a>
          <a
            href="https://github.com/devmatt9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <small className="d-block">
          &copy; {new Date().getFullYear()} La Station Burger — Tous droits réservés. |{" "}
          <a href="/mentions-legales" className="text-white text-decoration-underline">
            Mentions légales
          </a>
        </small>
      </Container>
    </footer>
  );
};

export default Footer;
