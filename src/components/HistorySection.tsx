import { Container } from "react-bootstrap";

const HistorySection = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">
          Notre Histoire 🍟
        </h2>
        <p className="lead text-center mx-auto">
          Tout a commencé dans une ancienne station de métro désaffectée 🚇… Un lieu chargé d’histoire et de fumets de viande grillée !<br /><br />
          En 2021, John Burger Jr., passionné par les bons produits et les ambiances décalées, décide d’ouvrir <strong>Burger Station</strong> : un repaire gourmand où le steak est roi 👑, les buns sont dorés comme le soleil ☀️ et les sauces secrètes réveillent vos papilles 🌶️.<br /><br />
          Ici, on ne fait pas les choses à moitié : pain brioché maison, ingrédients ultra frais, et une équipe qui cuisine avec le ❤️. On voulait un endroit qui sente bon le cheddar fondu, où l’on rit fort, et où chaque burger est une escale gourmande. Mission accomplie 🍔✔️
        </p>
      </Container>
    </section>
  );
};

export default HistorySection;
