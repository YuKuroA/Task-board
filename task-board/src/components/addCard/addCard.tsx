import React from "react";
import abandonIcon from "./Abandon.svg";
import './addCard.css';
import 'typeface-inter';
import { MyCard } from "../../types/cardtype";

interface FormProps {
    addCard: (newCard: MyCard) => void;
    closeModal: () => void;
}

const AddCard: React.FC<FormProps> = ({addCard, closeModal}) => {
    const createCard = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            cardName: { value: string };
        };

        addCard({
            id: crypto.randomUUID(),
            cardName: target.cardName.value
        });

        logCardCreation();
        closeModal();
    }
    
    const logCardCreation = () => {
        // TODO: Log event of creation card
        console.log('card created');
    }

    const addCardForm = (
        <form className="addCardForm" onSubmit={createCard}>
            <input type="text" placeholder="Enter card title" name="cardName" />
            <div className="controlsAddCard">
                <button type="submit">Add card</button>
                <img src={abandonIcon} alt="abadon" onClick={closeModal} />
            </div>
        </form>
    );

    return addCardForm;
}

export default AddCard;
