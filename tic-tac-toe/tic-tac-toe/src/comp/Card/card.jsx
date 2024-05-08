import Icon from "../Icons/icon";
import "./Card.css";

function Card({ gameEnd, player, onPlay, index }) {
  let icon = <Icon></Icon>;
  if (player === "X") {
    icon = <Icon name="cross"></Icon>;
  } else if (player === "O") {
    icon = <Icon name="circle" />;
  }
  return (
    <div
      className="card"
      onClick={() => !gameEnd && player == "" && onPlay(index)}
    >
      {icon}
    </div>
  );
}

export default Card;
