import image01 from "../assets/images/Ammar.png"
import image02 from "../assets/images/Ali.png"
import image03 from "../assets/images/DSC03970.png"

const TeamCard = ({ name, title, intro, imageSrc, altText }) => {

//     <div className="team-card">
//     <div className="circle"></div>
//     <div className="team-member">
//         <img src={imageSrc} alt={altText} />
//     </div>
// </div>

    return (
        <div className="team-card">
            <div className="about-section">
                <div className="about-section-image">
                    <div className="circle"></div>
                    <div className="about-section-image-inner">
                        <img src={imageSrc} alt={altText} />
                    </div>
                </div>
                <div className="about-section-text">
                    <div className="name-social-icons-wrapper">
                        <div className="name">{ name }</div>
                        <div className="social-icons">
                            <div className="icon"><i class="fa-brands fa-linkedin-in"></i></div>
                            
                            <div className="icon"><i class="fa-brands fa-instagram"></i></div>
                            <div className="icon"><i class="fa-brands fa-facebook-f"></i></div>
                            <div className="icon"><i class="fa-brands fa-square-dribbble"></i></div>
                        </div>
                    </div>
                    <div className="title">{ title }</div>
                    <div className="intro">{ intro }</div>
                </div>
            </div>
            <div className="contact-section">
                Schedule meet
            </div>
        </div>
    )
}

const Team = () => {

    const team = [
        {
            name: 'Ammar Haider',
            title: 'Founder/CEO - Digital Content Creator',
            intro: 'Ammar is a very nice guy and very good humble person. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
            imageSrc: image01,
            altText: "ammar-haider-the-insane-studio"
        }, 
        { 
            name: 'Usman Khalid',
            title: 'Co-founder - Game Director',
            intro: 'Ammar is a very nice guy and very good humble person. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
            imageSrc: image02,
            altText: "ali-the-insane-studio"
        },
        // {
        //     imageSrc: image03,
        //     altText: "the-third-guy-the-insane-studio"
        // }, 
    ]

    return(
        <div>
            <h1 className="heading">Meet Our Team</h1>

            <div className="team">
                { team.map((member, index) => <TeamCard {...member} key={`team-member-${index+1}`} />) }
            </div>

        </div>
        
    )

}

export default Team