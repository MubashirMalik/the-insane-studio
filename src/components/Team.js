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
                        <img src={imageSrc} alt={`${name}-the-insane-studio`} />
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
            title: 'CEO/Founder - Digital Content Creator',
            intro: 'The Founder of Insane Studios, as the visionary at our creative company, I take immense pride in guiding a team that is wholeheartedly dedicated to providing top-notch digital services. I’m dedicated to providing Digital Content Creation services myself and overlook the creative team and confident we can make a lasting impact in the ever-evolving digital landscape. My role involves nurturing our digital offerings and the continual evolution of our product lineup, all with the singular aim of ensuring that every facet of our enterprise harmoniously resonates with our mission of delivering unrivalled quality and excellence to our cherished clientele.',
            imageSrc: image01,
        }, 
        { 
            name: 'Usman Khalid',
            title: 'Flutter Dev - Game Developer',
            intro: `I'm Usman Khalid, a freelance Flutter app developer with a passion for tech and gaming. I specialise in crafting user-friendly mobile applications that combine innovation and functionality. Whether you have a unique app idea or want to enhance an existing project, I'm here to bring your vision to life. Let's collaborate to create captivating and functional mobile apps together. Explore my portfolio and get in touch to discuss your app development needs.`,
            imageSrc: image02,
        },
        {
            name: 'Ali Salman Khalid',
            title: '3d Visualizer',
            intro: `I am a passionate 3D artist. My primary focus is on 3D visualisation, where I specialise in bringing interior and exterior designs to life, making concepts tangible and captivating. I also have a strong interest in 3D modelling and animation.
            Whether someone is grappling with complex design challenges, seeking to communicate their ideas more effectively, or simply aiming to enhance their projects' visual appeal, I'm here to provide the solutions. Here, at Insane Studio, I'm committed to making the 3D visualisation journey smoother and more successful.`,
            imageSrc: image03, 
        },
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