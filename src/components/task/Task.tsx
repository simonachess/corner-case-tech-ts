import React from 'react';
import TaskItems from "../taskItem/TaskItems";

const Task: React.FC<any> = ({ index, title, subtasks, onClick, selected }) => {

    return (
        <div onClick={onClick} role="button">
            <div className="task-text">
                <span className="number" key={index}>{index}</span>
                <p className="text" key={title}>{title}</p>
                <span className={`line ${selected ? "line-longer" : ""}`} />
            </div>
            {selected && <TaskItems subtasks={subtasks} selected={selected} />}
        </div>
    )
}

export default Task