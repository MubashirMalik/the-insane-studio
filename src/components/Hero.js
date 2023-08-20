import heroImage from "../assets/images/hero-Image.png"


const Hero = () => {


    return(
        <div className="hero-image">
            {/* <img 
                src={heroImage}
                alt="the-insane-studio hero-image"
            />
            <div className="overlay">
                <h1 className="different-heading">Let us shape your<br/> digital success story!</h1>
                <button className="button">Explore Works</button>
            </div> */}
            <div className="hero-heading">
                <h1 className="different-heading">Let us shape your<br/> digital success story!</h1>
                <button className="button">Explore Works</button>
            </div>
            <div className="hero-video">
                <iframe src="https://www.youtube.com/embed?v=Wmd6ix9xcLE" width={'100%'} height={450} frameborder={"no"} style={{borderRadius:'20px'}}></iframe>              
                <div className="play-pause-button"></div>
            </div>
        </div>
    )

}

export default Hero