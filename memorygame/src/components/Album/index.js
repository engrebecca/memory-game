import React from "react";
// import "./style.css";

function albumImg({ name, image, ...props }) {
    console.log(props)
    return (
        <div className="card" {...props}>
            <div className="img-container" style={{ maxWidth: "30%", display: "inline-block" }}>
                <img style={{ maxWidth: "100%" }} alt={name} src={image} />
            </div>
            {/* <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li>
                </ul>
            </div>
            <span onClick={() => props.removeFriend(props.id)} className="remove">
                𝘅
      </span> */}
        </div>
    );
}

export default albumImg;
