import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Services from "./components/Services.js";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Hero from "./components/Hero";
import GetToKnowUs from "./components/GetToKnowUs";
import Testimonials from "./components/Testimonials";
import '@fortawesome/fontawesome-free/js/all.js';


function App() {

    

    return (
        <div className="App">
            <Navbar 
                
            />
            {/* <Hero /> */}
            <div className="wrapper">
                <Services />
                {/* <Stats />
                <GetToKnowUs />
                
                <Testimonials />
                <Team /> */}
            </div>
            <Footer />
        </div>
    );
}

export default App
