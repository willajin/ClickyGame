// container component
import React from "react";
import "./index.css";

function Container(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default Container;