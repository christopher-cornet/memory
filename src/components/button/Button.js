import "../../App.css"
import React from "react";

export default function Button(props) {
    return (
        <button onClick={props.shuffleCards}>
            <b>Start</b>
        </button>
    )
}