import React from "react";
const Testimonial = ({ item }) => {
    return (
        <div style={{ borderRadius: 50, backgroundColor: "rgba(0, 0, 0, 0.5)", padding: 50 }}>
            <div style={{ padding: 10, display: "flex" }}>
                <img
                    style={{ borderRadius: 50, border: "3px solid #8ffd2a",  objectFit: "cover" }}
                    src={item.imageSrc}
                    alt="the-insane-studio testimonials"
                    width="60px"
                    height="60px"
                />
                <div className="reviewer-about">
                    <div style={{ fontSize: '22px', fontWeight: 'bold' }}>{item.by}</div>
                    <div style={{ fontSize: '14px' }}>{ item.company }</div>
                </div>
            </div>
            <div>
                <p className='testimonial-message'>{item.message}</p>
            </div>
        </div>
    );
};
export default Testimonial;
