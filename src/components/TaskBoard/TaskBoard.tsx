import { useState } from "react";
import { AddColumn } from "../AddColumn";
import { ColumnInfo } from "../../models";
import Colunm from "../Column/Column";
import "./TaskBoard.css";

const firstColumn: ColumnInfo = {
  id: "1",
  name: "First Column",
};

export const TaskBoard: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [columnList, setColumnList] = useState([firstColumn]);

  const openModal = () => {
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
  };

  const addColumn = (newColumn: ColumnInfo) => {
    const newColumnList = columnList.concat();
    newColumnList.push(newColumn);
    setColumnList(newColumnList);
  };

  const deleteColumn = (id: string) => {
    const newColumnList = columnList.filter((column) => column.id !== id);
    setColumnList(newColumnList);
  };

  return (
    <div className="taskBoard">
      <div className="addColumn">
        {!showForm && (
          <button id="addNewColumn" onClick={openModal}>
            + Add new column
          </button>
        )}
        {showForm && (
          <AddColumn addColumn={addColumn} closeModal={closeModal} />
        )}
      </div>
      <div className="columns">
        {columnList.map((column) => (
          <Colunm
            key={column.id}
            columnName={column.name}
            onDelete={() => deleteColumn(column.id)}
          />
        ))}
      </div>
    </div>
  );
};
