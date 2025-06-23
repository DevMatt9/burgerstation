import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './BurgerCarousel.css';

interface Burger {
  name: string;
  image: string;
  isNew?: boolean;
}

const burgers: Burger[] = [
  { name: 'Le Classic', image: 'assets/burgers/classic.png' },
  { name: 'Le Spicy', image: 'assets/burgers/spicy.png', isNew: true },
  { name: 'Le Veggie', image: 'assets/burgers/veggie.png' },
  { name: 'Le Double', image: 'assets/burgers/double.png' },
  { name: 'Le BBQ', image: 'assets/burgers/bbq.png' },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    centerMode: true
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    centerMode: true
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
    centerMode: true // centrage du 1er burger
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    centerMode: true // centrage aussi sur mobile
  }
};

const BurgerCarousel: React.FC = () => {
  return (
    <section id="carte" className="py-5 burger-carousel-section">
      <h2 className="text-center mb-5">Nos Burgers 🍔</h2>
      <Carousel
        responsive={responsive}
        infinite
        arrows
        itemClass="carousel-item-padding-40-px"
        className="burger-carousel"
      >
        {burgers.map((burger, index) => (
          <div key={index} className="burger-card animate-slide-up text-center mx-3 position-relative">
            {burger.isNew && <span className="badge-new">Nouveau 🔥</span>}
            <img
              src={burger.image}
              alt={burger.name}
              className="burger-img mb-3"
            />
            <h5 className="burger-name">{burger.name}</h5>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default BurgerCarousel;
