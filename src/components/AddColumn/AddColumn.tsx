import React from "react";
import abandonIcon from "../../assets/abandon.svg";
import "./AddColumn.css";
import "typeface-inter";
import { ColumnInfo } from "../../models";

interface FormProps {
  addColumn: (newColumn: ColumnInfo) => void;
  closeModal: () => void;
}

export const AddColumn: React.FC<FormProps> = ({ addColumn, closeModal }) => {
  const createColumn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      columnName: { value: string };
    };

    addColumn({
      id: crypto.randomUUID(),
      name: target.columnName.value,
    });

    closeModal();
  };

  return (
    <form className="addColumnForm" onSubmit={createColumn}>
      <input type="text" placeholder="Enter column title" name="columnName" />
      <div className="controlsAddColumn">
        <button type="submit">Add column</button>
        <img src={abandonIcon} alt="abadon" onClick={closeModal} />
      </div>
    </form>
  );
};
