import episodes from "../data/episodes.json";
import { Footer } from "./Footer";
import { TurnCard } from "./CardFlipping";

function MyHeader() {
  return (
    <header>
      <h1>Match the pairs!</h1>
    </header>
  );
}

export default function App() {
  return (
    <div>
      <MyHeader />
      <div className="cardsList">
        <TurnCard animalCard={episodes[0]} />
        <TurnCard animalCard={episodes[1]} />
        <TurnCard animalCard={episodes[2]} />
        <TurnCard animalCard={episodes[3]} />
        <TurnCard animalCard={episodes[2]} />
        <TurnCard animalCard={episodes[3]} />
        <TurnCard animalCard={episodes[0]} />
        <TurnCard animalCard={episodes[1]} />
      </div>
      <Footer />
    </div>
  );
}
