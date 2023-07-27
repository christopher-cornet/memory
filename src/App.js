import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/card/Card';

const cardImages = [
	{ "src": "/img/0.png" },
	{ "src": "/img/1.png" },
	{ "src": "/img/2.png" },
	{ "src": "/img/3.png" },
	{ "src": "/img/4.png" },
	{ "src": "/img/5.png" },
	{ "src": "/img/6.png" },
	{ "src": "/img/7.png" },
	{ "src": "/img/8.png" },
	{ "src": "/img/9.png" },
	{ "src": "/img/10.png" },
	{ "src": "/img/11.png" },
	{ "src": "/img/12.png" },
	{ "src": "/img/13.png" },
	{ "src": "/img/14.png" },
	{ "src": "/img/15.png" },
	{ "src": "/img/16.png" },
	{ "src": "/img/17.png" },
	{ "src": "/img/18.png" },
	{ "src": "/img/19.png" },
	{ "src": "/img/20.png" },
	{ "src": "/img/21.png" },
	{ "src": "/img/22.png" },
	{ "src": "/img/23.png" },
	{ "src": "/img/24.png" },
	{ "src": "/img/25.png" },
	{ "src": "/img/26.png" },
	{ "src": "/img/27.png" },
	{ "src": "/img/28.png" },
	{ "src": "/img/29.png" }
]

function App() {
	const [cards, setCards] = useState([])
	const [turns, setTurns] = useState(0)

	const shuffleCards = () => {
		const shuffledCards = [...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }))

		setCards(shuffledCards)
		setTurns(0)
	}

	console.log(cards, turns)

	return (
	<div className="App">
		<div class="memory-game">
			<div class="left-options">
				<p>Test</p>
				<button onClick={shuffleCards}>Shuffle</button>
			</div>
			
			<div class="cards-grid">
				{cards.map(card => (
					<Card key={card.id} card={card}/>
				))}
			</div>
		</div>
	</div>
	);
}

export default App
