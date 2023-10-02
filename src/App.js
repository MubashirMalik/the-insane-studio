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
import { createContext, useContext, useRef, useState } from "react";

const ScrollContext = createContext()

const ScrollContextProvider = ({ children }) => {
    const [toggleState, setToggleState] = useState(false)
    const dropdownRef = useRef()

    const scrollTo = id => {
        const section = document.getElementById( id );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    const toggled = () => {
        setToggleState(prevToggleState => !prevToggleState)
        dropdownRef.current.classList.toggle('open')
    }

    return (
        <ScrollContext.Provider value={{ toggleState, toggled, dropdownRef, scrollTo }}>
            { children }
        </ScrollContext.Provider>
    )
}


// context consumer hook
export const useScrollContext = () => {
    // get the context
    const context = useContext(ScrollContext);
  
    // if `undefined`, throw an error
    if (context === undefined) {
      throw new Error("useScrollContext was used outside of its Provider");
    }
  
    return context;
};

function App() {
    return (
        <BrowserRouter>
            <ScrollContextProvider>
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
            </ ScrollContextProvider>
        </BrowserRouter>
    );
}

export default App;
