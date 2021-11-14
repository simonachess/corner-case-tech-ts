import React, { useState, useRef, useEffect } from 'react';
import TaskItems from "./TaskItems";


interface Props {
    index: number,
    title: string,
    subtasks: string[],
}

const Task: React.FC<Props> = ({ index, title, subtasks }) => {

    const [show, setShow] = useState<boolean>(false);

    const node = useRef<HTMLDivElement>(null);

    const handleClick = (e: MouseEvent) => {
        if (node?.current?.contains(e.target as Node)) {
            return;
        }
        setShow(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div ref={node} onClick={() => setShow(!show)}>
            <div className="task-text">
                <div className="number" key={index}>{index}</div>
                <div className="text" key={title}>{title}</div>
                <span className={`line ${show ? "line-longer" : ""}`}></span>
            </div>
            {show ? <TaskItems subtasks={subtasks} /> : ""}
        </div>
    )
}

export default Task