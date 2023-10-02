import { Link } from "react-router-dom"

 


const Service = ({ service }) => {
    return(
        <div className="outer-shadow-box">
            <Link to={service.link} target="_blank" rel="noopener noreferrer">
                <div 
                    className="service" dangerouslySetInnerHTML={{ __html: service.name.split(' ').join('<br />') }}
                >
                </div>
            </Link>
        </div>
    )

}

const Services = () =>{
    const serviceData = [
        { name: 'Graphics Design', link: 'https://www.ammar.com'},
        { name: 'Video Editing', link: 'https://www.youtube.com'},
        { name: 'Product Photography', link: ''},
        { name: 'Product Videography', link: ''},
        { name: 'Web Development', link: ''},
        { name: 'Web Design', link: ''},
        { name: 'Flutter Development', link: ''},
        { name: '3D Visualization', link: ''},
    ]
    
    return (
        <div id="our-services">
            <h1 className="heading">Our Portfolio</h1>
            <div className="services">
                { serviceData.map((service, index) => <Service key={`${service}-${index}`} service={service} />) }
            </div>
        </div>
    )
}


export default Services