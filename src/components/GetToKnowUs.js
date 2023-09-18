import img from "../assets/images/INSANE.jpg"

const GetToKnowUs = () => {


    return (
        <div className="get-to-know-us" id="about-me">
            <div className="first-div">
                <h1 className="heading">Get To Know About Us Closer</h1>
                <div className="get-to-know-us-text">
                    
Founded in 2023, Insane Studios is a visionary leader in the realm of digital services. Our mission is to deliver nothing short of excellence in the digital landscape. Comprising a team of dedicated and industrious professionals, we have become synonymous with top-tier workmanship in Pakistan.
                </div>
                <button style={{ width: "270px" }}>Explore Our Portfolio</button>
            </div>
            <div>
                <img
                    src={img}
                />
            </div>
        </div>
    )
}

export default GetToKnowUs
