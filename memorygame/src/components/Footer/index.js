import React from "react";
import "./style.css";

function Footer(props) {
    return <footer className="footer">
        {props.text}
    </footer>;
}

export default Footer;
