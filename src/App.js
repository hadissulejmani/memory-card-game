import "./App.css";
import Card from "./components/Card";
import { useState, useEffect } from "react";

const cardImages = [
  { src: "../img/helmet-1.png" },
  { src: "../img/potion-1.png" },
  { src: "../img/ring-1.png" },
  { src: "../img/scroll-1.png" },
  { src: "../img/shield-1.png" },
  { src: "../img/sword-1.png" },
];
function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    console.log(shuffledCards);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    console.log(choiceOne, choiceTwo);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("You found a match!");
        resetTurn();
      } else {
        console.log("No match");
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="App">
      <p>Memory card game</p>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
