import { useState } from "react";
// import { increaaseCounter, decreaaseCounter } from "./cardCounter";

export function TurnCard(props) {
  const backOfCard = <img src={props.animalCard.image.card} />;
  const faceofCard = <img src={props.animalCard.image.animal} />;

  const result = useState(backOfCard);
  const currentCard = result[0];
  const setCardFacing = result[1];

  function handleCardFlip(outcome) {
    console.log("increment clicked");

    if (outcome == "down") {
      setCardFacing(backOfCard);
    } else if (outcome == "up") {
      setCardFacing(faceofCard);
    }
  }

  return (
    <div>
      <p>
        <div className="card-image">{currentCard}</div>
      </p>
      <p>
        {" "}
        <div className="buttons">
          <button onClick={() => handleCardFlip("down")}> back of card </button>
          | <button onClick={() => handleCardFlip("up")}> card face </button>
        </div>
      </p>
    </div>
  );
}
