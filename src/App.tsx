import "./App.css";
import NavigationMenu from "./components/NavigationMenu";
import BurgerCarousel from "./components/BurgerCarousel";
import AboutChef from "./components/AboutChef";
import VideoSection from "./components/VideoSection";
import HistorySection from "./components/HistorySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationMenu />
      <VideoSection />
      <HistorySection />
      <BurgerCarousel />
      <AboutChef />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
