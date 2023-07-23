 


const Service = ({ service }) => {

    return(
        <div className="outer-shadow-box">
            <div className="service">
                { service }
            </div>
        </div>
    )

}



const Services = () =>{
    const serviceData = [
        'Graphics Design',
        'Video Editing',
        'Product Photography',
        'Sound Engineer',
        'Motion Graphics',
        'Web Design',
        'Web Development',
        'Product Photography'
    ]
    
    return (
        <div id="our-services">
            <h1 className="heading">Our Services</h1>
            <div className="services">
                { serviceData.map((service, index) => <Service key={`${service}-${index}`} service={service} />) }
            </div>
        </div>
    )
}


export default Services