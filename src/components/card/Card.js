// Method to display the card (dark side by default)

// Method : if two same cards are returned do {let them shown}

import React from "react";
import darksidecard from "../../img/verso.jpg";

export default function Card() {
    return (
        <img
            src={darksidecard}
        />
    )
}

// const Card = ({card, index}) => {
//     return (
//         <div class="cards-grid">
//             <img src={card.src} alt="card" />
//         </div>
//     )
// }