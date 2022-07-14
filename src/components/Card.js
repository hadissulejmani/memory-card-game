import "./Card.css";

function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front"
          src={card.src}
          onClick={handleClick}
          alt="front card"
        />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="back card"
        />
      </div>
    </div>
  );
}

export default Card;
