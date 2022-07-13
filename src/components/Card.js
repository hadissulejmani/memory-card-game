import "./Card.css";

function Card({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img src={card.src} onClick={handleClick} alt="front card" />
        <img src="/img/cover.png" onClick={handleClick} alt="back card" />
      </div>
    </div>
  );
}

export default Card;
