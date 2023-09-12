import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Services from "./components/Services.js";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Hero from "./components/Hero";
import GetToKnowUs from "./components/GetToKnowUs";
import "@fortawesome/fontawesome-free/js/all.js";
import TestimonialsCarousel from "./components/TestimonialsCarousel/TestimonialsCarousel";
import { testimonials } from "./components/TestimonialsCarousel/Content";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
            <Navbar />
            <Hero />
            <div className="wrapper">
                <Stats />
                <Services />
                <TestimonialsCarousel items={testimonials} />
                <Team />
                <GetToKnowUs />
            </div>
            <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
