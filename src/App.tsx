import React from 'react';
import Task from "./Task";
import "./App.css";

const data: Array<{ index: number, title: string, tasks: string[] }> = [
  {
    index: 1,
    title: 'Build test task',
    tasks:
      [
        'Create repository',
        'Implement designs',
        'Implement functionality',
      ],
  },
  {
    index: 2,
    title: 'Submit your test task',
    tasks:
      [
        'Open email client',
        'Sent link with information to <a href=mailto:careers@cornercasetech.com>careers@cornercasetech.com</a>',
      ],
  },
  {
    index: 3,
    title: 'Participate in tech interview',
    tasks:
      [
        'Talk with HR',
        'Talk with Tech team',
      ],
  },
  {
    index: 4,
    title: 'Receive answer',
    tasks:
      [
        'Receive answer',
        'Start your IT career',
      ],
  }
]

const App: React.FC = () => {

  return (
    <div className="App">
      <h1>CCT Lab Process</h1>
      {data.map((task, index) =>
        <Task index={task.index} title={task.title} subtasks={task.tasks} key={index} />
      )}
    </div>
  );
}

export default App;
