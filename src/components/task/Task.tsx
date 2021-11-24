import React from 'react';
import TaskItems from "../taskItem/TaskItems";


interface Props {
    id: number,
    title: string,
    subtasks: string[],
    onCLick: any,
    show: any
}

const Task: React.FC<any> = ({ index, title, subtasks, onClick, show }) => {

    return (
        <div onClick={onClick}>
            <div className="task-text">
                <div className="number" key={index}>{index}</div>
                <div className="text" key={title}>{title}</div>
                <span className={`line ${show ? "line-longer" : ""}`} />
            </div>
            {show && <TaskItems subtasks={subtasks} />}
        </div>
    )
}

export default Task