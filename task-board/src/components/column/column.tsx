import React, { useState } from "react";
import './column.css'
import deleteIcon from "./Delete.svg"
import Card from "../card/card";
import AddCard from "../addCard/addCard";
import 'typeface-inter';
import { MyCard } from "../../types/cardtype";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

interface ColumnProps {
    columnName: string;
    onDelete: () => void;
}

const Colunm: React.FC<ColumnProps> = ( props ) => {
    const [showForm, setShowForm] = useState(false);
    const [visibility, setVisibility] = useState(true);
    const [cardList, setCardList] = useState<MyCard[]>([]);

    const openModal = () => {
        setShowForm(true);
    };
    
    const closeModal = () => {
        setShowForm(false);
    };

    const addCard = (newCard:MyCard) => {
        const newCardList = cardList.concat();
        newCardList.push(newCard);
        setCardList(newCardList);
    }

    const deleteCard = (id:string) => {
        const newCardList = cardList.filter(card => card.id !== id);
        setCardList(newCardList);
    }

    const editCard = (newCard:MyCard) => {
        const newCardList = cardList.concat();
        const index = newCardList.findIndex(item => item.id === newCard.id);
        newCardList[index] = newCard;
        setCardList(newCardList)
    }

    const handleOnDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }

        const items = Array.from(cardList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setCardList(items);
    }

    const Column = (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="column">
                <div className="columnHead">
                    <p>{props.columnName}</p>
                    <img src={deleteIcon} alt="delete button" onClick={props.onDelete} />
                </div>
                <Droppable droppableId={crypto.randomUUID()}>
                    {(provided) => (
                        visibility && <div className="columnBody" {...provided.droppableProps} ref={provided.innerRef}>
                            {cardList.map((card, index) => {
                                console.log(card)
                                return (
                                <Draggable key={card.id} draggableId={card.id} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <Card cardName={card.cardName} onDelete={() => deleteCard(card.id)} editCard={editCard} id={card.id} />
                                        </div>
                                    )}
                                </Draggable>
                            )})}
                            {provided.placeholder}
                        </div>
                    )}                   
                </Droppable>
                <div className="addCard">
                    {!showForm && <label onClick={openModal}>+ Add new card</label>}
                    {showForm && <AddCard addCard={addCard} closeModal={closeModal} />}
                </div>
                
            </div>
        </DragDropContext>
    )

    return Column
}

export default Colunm