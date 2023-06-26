import React, { useState } from "react";
import './card.css';
import deleteIcon from "./Delete.svg";
import 'typeface-inter';
import { format } from "path";
import { MyCard } from "../../types/cardtype";

interface CardProps {
    id: string;
    cardName: string;
    onDelete: () => void;
    editCard: (newCard: MyCard) => void;
}

const Card: React.FC<CardProps> = (props) => {
    const [showEditCardForm, setShowEditCardForm] = useState(false);

    const callEdit = () => {
        setShowEditCardForm(true);
    }

    const editMyCard = (event: React.FormEvent<HTMLFormElement>) => {    
        event.preventDefault();

        const target = event.target as typeof event.target & {
            cardName: { value: string };
        };

        props.editCard({
            id: props.id,
            cardName: target.cardName.value
        });

        setShowEditCardForm(false);        
    }
    
    const Card = (
        <div>
            {
                !showEditCardForm &&
                <div className="card" onClick={callEdit}>
                    <p>{props.cardName}</p>
                    <img src={deleteIcon} alt="delete button" onClick={props.onDelete} />
                </div>
            }
            {
                showEditCardForm &&
                <form onSubmit={editMyCard}>
                    <input type="text" name="cardName" />
                    <button type="submit">Submit</button>
                </form>
            }
        </div>    
    );

    return Card;
}

export default Card;
