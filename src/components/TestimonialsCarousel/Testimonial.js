import React from "react";
const Testimonial = ({ item }) => {
  return (
    <div style={{ borderRadius: 50, backgroundColor: "black", padding: 50 }}>
      <div style={{ padding: 10, display: "flex" }}>
        <img
          style={{ borderRadius: 50, border: "4px solid #8ffd2a",  objectFit: "cover" }}
          src={item.imageSrc}
          alt="the-insane-studio testimonials"
          width="60px"
          height="60px"
        />
        <h4 style={{ marginLeft: 10, color: "white" }}>{item.by}</h4>
      </div>
      <div>
        <p style={{ color: "white" }}>{item.message}</p>
      </div>
    </div>
  );
};
export default Testimonial;
