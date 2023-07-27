import image01 from "../assets/images/Ammar.png"
import image02 from "../assets/images/Ali.png"
import image03 from "../assets/images/DSC03970.png"

const TeamCard = ({ imageSrc, altText }) => {


    return (
        <div className="team-card">
            <div className="circle"></div>
            <div className="team-member">
                <img src={imageSrc} alt={altText} />
            </div>
        </div>
    )
}

const Team = () => {

    const team = [
        {
            imageSrc: image01,
            altText: "ammar-haider-the-insane-studio"
        }, 
        {
            imageSrc: image02,
            altText: "ali-the-insane-studio"
        },
        {
            imageSrc: image03,
            altText: "the-third-guy-the-insane-studio"
        }, 
    ]

    return(
        <div>
            <h1 className="heading">Meet Our Team</h1>
            <div className="team">
                { team.map(member => <TeamCard {...member} />) }
            </div>
        </div>
        
    )

}

export default Team