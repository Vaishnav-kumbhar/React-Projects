import React, { useState, useEffect } from "react";
import "./card.css";
import Card from "../Card/Card";
const CardContainer = () => {
  const [cards, setCards] = useState([
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
    "Card 5",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = prevCards.slice(1);
        newCards.push(Card`${prevCards.length + 1}`);
        return newCards;
      });
    }, 10000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index}>{card}</Card>
      ))}
    </div>
  );
};

export default CardContainer;
