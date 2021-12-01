import React from 'react';
import Radio from './Radio.svg';

interface Props {
    subtasks: string[],
    selected: any
}

export const TaskItems: React.FC<Props> = ({ subtasks }) => {

    return (
        <ul className="all-tasks">
            {subtasks.map((item, index) => {
                return (
                    <li className="task-item" key={index}>
                        <img src={Radio} alt="checked" />
                        <p dangerouslySetInnerHTML={{
                            __html: item
                        }}></p>
                    </li>
                )
            })}
        </ul>
    );
}
export default TaskItems