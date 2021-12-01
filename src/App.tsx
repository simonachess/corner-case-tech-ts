import { useState } from 'react';
import Task from "./components/task/Task";
import "./App.css";
import data from './data/tasks'

const App = () => {

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main>
      <h1>CCT Lab Process</h1>
      {data.map((task, index) =>
        <Task index={task.id} title={task.title} subtasks={task.tasks} selected={selected === task.id} key={index} onClick={() => setSelected(task.id)} />
      )}
    </main>
  );
}

export default App;
