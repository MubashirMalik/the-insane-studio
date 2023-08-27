import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Services from "./components/Services.js";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Hero from "./components/Hero";
import GetToKnowUs from "./components/GetToKnowUs";
import Testimonials from "./components/Testimonials";
import "@fortawesome/fontawesome-free/js/all.js";
import TestimonialsCarousel from "./components/TestimonialsCarousel/TestimonialsCarousel";
import { testimonials } from "./components/TestimonialsCarousel/Content";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="wrapper">
        <Stats />
        <GetToKnowUs />
        <Services />
        <TestimonialsCarousel items={testimonials} />

        <Team />
      </div>
      <Footer />
    </div>
  );
}

export default App;
