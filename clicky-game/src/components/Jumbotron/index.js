// jumbotron component
import React from "react";
import "./index.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1 class="display-4">The  Clicky  Game</h1>
            <p class="lead">Click on an image to earn points, but don't click on any more than once</p>
            <hr class="my-4"></hr>
            <div class="scores">
                Score: {props.score} | Top Score: {props.topscore}
            </div>
        </div>
    );
}

export default Jumbotron;