// wrapper component
import React from "react";
import "./index.css";

function Wrapper(props) {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper;