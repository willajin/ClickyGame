// footer component
import React from "react";
import "./index.css";

function Footer(props) {
    return (
        <header className="footer">
        <hr class="my-4"></hr>
            {props.children}
        </header>
    )
}

export default Footer;