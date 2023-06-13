import React from "react"
import abandonIcon from "./Abandon.svg"
import './addColumn.css'
import 'typeface-inter';
import { MyColumn } from "../../types/columntype";

interface FormProps {
    addColumn: (newColumn: MyColumn) => void
    closeModal: () => void
}

const AddColumn: React.FC<FormProps> = ({addColumn, closeModal}) => {
    const createColumn = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const target = event.target as typeof event.target & {
            columnName: { value: string };
        };

        addColumn({
            id: crypto.randomUUID(),
            columnName: target.columnName.value
        })

        closeModal()
    }

    const addColumnForm = (
        <form className="addColumnForm" onSubmit={createColumn}>
            <input type="text" placeholder="Enter column title" name="columnName" />
            <div className="controlsAddColumn">
                <button type="submit">Add column</button>
                <img src={abandonIcon} alt="abadon" onClick={closeModal} />
            </div>
        </form>
    )

    return addColumnForm
}

export default AddColumn