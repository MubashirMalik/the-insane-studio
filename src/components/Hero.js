const Hero = () => {


    return(
        <div className="hero">
            <div className="hero-header">
                <h1>Let us<br/>shape your<br/> digital success<br/> story!</h1>
                <button>Explore Work<i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="hero-video">
                <iframe src="https://www.youtube.com/embed?v=Wmd6ix9xcLE" width={'100%'} frameborder={"no"} style={{borderRadius:'20px'}}></iframe>              
                <div className="play-pause-button"></div>
            </div>
        </div>
    )

}

export default Hero