import img from "../assets/images/INSANE.jpg"

const GetToKnowUs = () => {


    return (
        <div className="get-to-know-us">
            <div className="first-div">
                <h1 className="heading">Get To Know About Us Closer</h1>
                <div className="get-to-know-us-text">
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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