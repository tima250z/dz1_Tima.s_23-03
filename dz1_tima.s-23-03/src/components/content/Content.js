import React from "react";
import "./Content.css";

export default function Content(props) {
    return (
        <div className="main">
            <div className="container">
                <div className="main_inner">{props.card}</div>
            </div>
        </div>
    );
}