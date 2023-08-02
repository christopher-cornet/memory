import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/card/Card';
import Title from './components/title/Title';
import Button from './components/button/Button';

const cardImages = [
	{ "src": "/img/0.png", matched: false },
	{ "src": "/img/2.png", matched: false },
	{ "src": "/img/4.png", matched: false },
	{ "src": "/img/6.png", matched: false },
	{ "src": "/img/8.png", matched: false },
	{ "src": "/img/10.png", matched: false },
	{ "src": "/img/12.png", matched: false },
	{ "src": "/img/14.png", matched: false },
	{ "src": "/img/16.png", matched: false },
	{ "src": "/img/18.png", matched: false },
	{ "src": "/img/20.png", matched: false },
	{ "src": "/img/22.png", matched: false },
	{ "src": "/img/24.png", matched: false },
	{ "src": "/img/26.png", matched: false },
	{ "src": "/img/28.png", matched: false }
]

function App() {
	const [cards, setCards] = useState([])
	const [turns, setTurns] = useState(0)
	const [choiceOne, setChoiceOne] = useState(null)
	const [choiceTwo, setChoiceTwo] = useState(null)
	const [disabled, setDisabled] = useState(false)

	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }))

		setCards(shuffledCards)
		setTurns(0)
	}

	const handleChoice = (card) => {
		choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
	}

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			setDisabled(true)
			if (choiceOne.src === choiceTwo.src) {
				setCards(prevCards => {
					return prevCards.map(card => {
						if (card.src === choiceOne.src) {
							return { ...card, matched: true }
						}
						else {
							return card
						}
					})
				})
				resetTurn()
			}
			else {
				setTimeout(() => resetTurn(), 1000)
			}
		}
	}, [choiceOne, choiceTwo])

	console.log(cards)

	const resetTurn = () => {
		setChoiceOne(null)
		setChoiceTwo(null)
		setTurns(prevTurns => prevTurns + 1)
		setDisabled(false)
	}

	return (
	<div className="App">
		<div class="memory-game">
			<div class="left-options">
				<Title />
				<Button shuffleCards={shuffleCards}/>
			</div>
			
			<div class="cards-grid">
				{cards.map(card => (
					<Card
						key={card.id}
						card={card}
						handleChoice={handleChoice}
						flipped={card === choiceOne || card === choiceTwo || card.matched}
						disabled={disabled}
					/>
				))}
			</div>
		</div>
	</div>
	);
}

export default App
