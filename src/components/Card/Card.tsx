import React, { useState } from "react";
import "./Card.css";
import deleteIcon from "../../assets/delete.svg";
import "typeface-inter";
import { CardInfo } from "../../models";

interface CardProps {
  id: string;
  cardName: string;
  onDelete: () => void;
  editCard: (newCard: CardInfo) => void;
}

export const Card: React.FC<CardProps> = (props) => {
  const [showEditCardForm, setShowEditCardForm] = useState(false);

  const callEdit = () => {
    setShowEditCardForm(true);
  };

  const editMyCard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      cardName: { value: string };
    };

    props.editCard({
      id: props.id,
      name: target.cardName.value,
    });

    setShowEditCardForm(false);
  };

  return (
    <div>
      {!showEditCardForm && (
        <div className="card" onClick={callEdit}>
          <p>{props.cardName}</p>
          <img src={deleteIcon} alt="delete button" onClick={props.onDelete} />
        </div>
      )}
      {showEditCardForm && (
        <form onSubmit={editMyCard}>
          <input type="text" name="cardName" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
