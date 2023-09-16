 


const Service = ({ service }) => {
    return(
        <div className="outer-shadow-box">
            <div className="service" dangerouslySetInnerHTML={{ __html: service.split(' ').join('<br />') }}>
            </div>
        </div>
    )

}

const Services = () =>{
    const serviceData = [
        'Graphics Design',
        'Video Editing',
        'Product Photography',
        'Product Videography',
        'Web Development',
        'Web Design',
        'Flutter Development',
        '3D Visualization'
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