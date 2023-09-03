import React from "react";
import abandonIcon from "../../assets/abandon.svg";
import "typeface-inter";
import "./AddCard.css";
import { CardInfo } from "../../models";

interface FormProps {
  addCard: (newCard: CardInfo) => void;
  closeModal: () => void;
}

export const AddCard: React.FC<FormProps> = ({ addCard, closeModal }) => {
  const createCard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      cardName: { value: string };
    };

    addCard({
      id: crypto.randomUUID(),
      name: target.cardName.value,
    });

    logCardCreation();
    closeModal();
  };

  const logCardCreation = () => {
    // TODO: Log event of creation card
    console.log("card created");
  };

  return (
    <form className="addCardForm" onSubmit={createCard}>
      <input type="text" placeholder="Enter card title" name="cardName" />
      <div className="controlsAddCard">
        <button type="submit">Add card</button>
        <img src={abandonIcon} alt="abadon" onClick={closeModal} />
      </div>
    </form>
  );
};
