import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Services from "./components/Services.js";
import Footer from "./components/Footer";
import Team from "./components/Team";

function App() {

    

    return (
        <div className="App">
            <Navbar 
                
            />
            <div className="wrapper">
                <Stats />
                <Services />
                <Team />
            </div>
            <Footer />
        </div>
    );
}

export default App
