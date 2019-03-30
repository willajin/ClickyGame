// imagecard component
import React from "react";
import "./index.css";

function ImageCard(props) {
    return (
        <div className="card" onClick={props.clickCount}>
            <img className="card-img-top"
                alt={props.name}
                src={props.image}
            />
        </div>
    );
}

export default ImageCard;