import { useState } from "react";

export function TurnCard(props) {
  const backOfCard = <img src={props.animalCard.image.card} />;
  const faceofCard = <img src={props.animalCard.image.animal} />;

  const result = useState(backOfCard);
  const currentCard = result[0];
  const setCardFacing = result[1];

  function handleCardFlip(outcome) {
    let counter = 0;
    console.log("increment clicked");

    if (outcome == "down" && counter > 0) {
      counter = counter - 1;
      setCardFacing(backOfCard);
    } else if (outcome == "down" && counter <= 0) {
      return alert("0 cards have been flipped!");
    } else if (outcome == "up" && counter < 2) {
      counter = counter + 1;
      setCardFacing(faceofCard);
    } else if (outcome == "up" && counter >= 2) {
      return alert("2 cards already flipped!");
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
