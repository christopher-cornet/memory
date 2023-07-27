import "../../App.css"
import React from "react";

export default function Card({ card }) {
    return (
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="card front" />
                <img className="back" src={"/img/verso.jpg"} alt="card back" />
            </div>
        </div>
    )
}