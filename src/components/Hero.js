import { useScrollContext } from '../App'
import heroVideo from '../assets/Hero Video.mp4'

const Hero = () => {
    const { scrollTo } = useScrollContext()
    return(
        <div className="hero">
             <video autoPlay muted loop id="video-background">
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-header animation-container">
                <h1 className='bottom-up-text'>Let us<br/>shape your<br/> digital success<br/> story!</h1>
                <button 
                    onClick={() => scrollTo("our-services")}
                >
                    Explore Work<i className="fa-solid fa-arrow-right blink"></i>
                </button>
            </div>
        </div>
    )

}

export default Hero