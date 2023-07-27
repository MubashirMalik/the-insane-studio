import heroImage from "../assets/images/hero-Image.png"


const Hero = () => {


    return(
        <div className="hero-image">
            <img 
                src={heroImage}
                alt="the-insane-studio hero-image"
            />
            <div className="overlay">
                <h1 className="different-heading">Let us shape your<br/> digital success story!</h1>
                <button className="button">Explore Works</button>
            </div>
        </div>
    )

}

export default Hero