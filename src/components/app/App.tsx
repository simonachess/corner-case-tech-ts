import React, { useState } from 'react';
import Task from "../task/Task";
import "./App.css";




const data = [
  {
    id: 1,
    title: 'Build test task',
    tasks:
      [
        'Create repository',
        'Implement designs',
        'Implement functionality',
      ],
  },
  {
    id: 2,
    title: 'Submit your test task',
    tasks:
      [
        'Open email client',
        'Sent link with information to <a href=mailto:careers@cornercasetech.com>careers@cornercasetech.com</a>',
      ],
  },
  {
    id: 3,
    title: 'Participate in tech interview',
    tasks:
      [
        'Talk with HR',
        'Talk with Tech team',
      ],
  },
  {
    id: 4,
    title: 'Receive answer',
    tasks:
      [
        'Receive answer',
        'Start your IT career',
      ],
  }
]

const App = () => {

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="App">
      <h1>CCT Lab Process</h1>
      {data.map((task, index) =>
        <Task index={task.id} title={task.title} subtasks={task.tasks} show={selected === task.id} key={index} onClick={() => setSelected(task.id)} />
      )}
    </div>
  );
}

export default App;
