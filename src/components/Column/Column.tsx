import React, { useState } from "react";
import "./Column.css";
import deleteIcon from "../../assets/delete.svg";
import { Card } from "../Card";
import { AddCard } from "../AddCard";
import "typeface-inter";
import { CardInfo } from "../../models";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";

interface ColumnProps {
  columnName: string;
  onDelete: () => void;
}

const Colunm: React.FC<ColumnProps> = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [cardList, setCardList] = useState<CardInfo[]>([]);

  const openModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  const addCard = (newCard: CardInfo) => {
    const newCardList = cardList.concat();
    newCardList.push(newCard);
    setCardList(newCardList);
  };

  const deleteCard = (id: string) => {
    const newCardList = cardList.filter((card) => card.id !== id);
    setCardList(newCardList);
  };

  const editCard = (newCard: CardInfo) => {
    const newCardList = cardList.concat();
    const index = newCardList.findIndex((item) => item.id === newCard.id);
    newCardList[index] = newCard;
    setCardList(newCardList);
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(cardList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCardList(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="column">
        <div className="columnHead">
          <p>{props.columnName}</p>
          <img src={deleteIcon} alt="delete button" onClick={props.onDelete} />
        </div>
        <Droppable droppableId={crypto.randomUUID()}>
          {(provided) => (
            <div
              className="columnBody"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cardList.map((card, index) => {
                console.log(card);
                return (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card
                          cardName={card.name}
                          onDelete={() => deleteCard(card.id)}
                          editCard={editCard}
                          id={card.id}
                        />
                      </div>
                    )}
                  </Draggable>
                );
              })}
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
  );
};

export default Colunm;
