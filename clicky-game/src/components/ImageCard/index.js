// imagecard component
import React from "react";
import "./index.css";

function ImageCard(props) {
    return (
        <div className="card border-0" onClick={() => props.clickCount(props.id)}>
            <div className="img-container">
                <img
                    alt={props.name}
                    src={props.image}
                />
            </div>
        </div>
    );
}

export default ImageCard;