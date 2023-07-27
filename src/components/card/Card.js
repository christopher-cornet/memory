import "../../App.css"
import React from "react";

export default function Card({ card, handleChoice, flipped }) {
    const handleClick = () => {
        handleChoice(card)
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}></div>
            <div>
                <img className="front" src={card.src} alt="card front" />
                <img
                    className="back"
                    src={"/img/verso.jpg"}
                    onClick={handleClick}
                    alt="card back"
                />
            </div>
        </div>
    )
}