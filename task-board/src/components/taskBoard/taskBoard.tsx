import { useState } from "react";
import AddColumn from "../addColumn/addColumn"
import { MyColumn } from "../../types/columntype";
import Colunm from "../column/column";
import './taskBoard.css'

const firstColumn:MyColumn = ({
    id: '1',
    columnName: 'First Column'
});

const TaskBoard:React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const [columnList, setColumnList] = useState ([firstColumn]);
    const [selectedTask, setSelectedTask] = useState('');

    const openModal = () => {
        setShowForm(true);
    };
    
    const closeModal = () => {
        setShowForm(false);
    };

    const addColumn = (newColumn:MyColumn) => {
        const newColumnList = columnList.concat();
        newColumnList.push(newColumn);
        setColumnList(newColumnList);
    }

    const deleteColumn = (id:string) => {
        const newColumnList = columnList.filter(column => column.id !== id);
        setColumnList(newColumnList);
    }

    const selectCurrentTask = (taskId: string) => {
        setSelectedTask(taskId);
    }

    const TaskBoard = (
        <div className="taskBoard">
            <div className="addColumn">
                {!showForm && <button id="addNewColumn" onClick={openModal}>+ Add new column</button>}
                {showForm && <AddColumn addColumn={addColumn} closeModal={closeModal} />}
            </div>
            <div className="columns">
                {columnList.map(column => <Colunm key={column.id} columnName={column.columnName} onDelete={() => deleteColumn(column.id)}/>)}
            </div>
        </div>
    )

    return TaskBoard
}

export default TaskBoard