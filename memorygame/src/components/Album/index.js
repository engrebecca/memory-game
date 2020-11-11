import React from "react";
// import "./style.css";

function albumImg({ name, image, ...props }) {
    console.log(props)
    return (
        <div className="card" {...props}>
            <div className="img-container" style={{ maxWidth: "30%", display: "inline-block" }}>
                <img style={{ maxWidth: "100%" }} alt={name} src={image} />
            </div>
        </div>
    );
}

export default albumImg;
