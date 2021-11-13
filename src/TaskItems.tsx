import React from 'react';
import Radio from './Radio.svg';

interface Props {
    subtasks: string[],
}

export const TaskItems: React.FC<Props> = ({ subtasks }) => {

    return (
        <div className="tasks-container">
            <div className="all-tasks">
                {subtasks.map((item, index) => {
                    return (
                        <div className="task-item" key={index}>
                            <img src={Radio} alt="checked" />
                            <p dangerouslySetInnerHTML={{
                                __html: item
                            }}></p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default TaskItems