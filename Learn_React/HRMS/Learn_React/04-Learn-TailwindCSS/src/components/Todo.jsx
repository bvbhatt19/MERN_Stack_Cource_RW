import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function Todo() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h1 className="flex justify-center items-center">My To-Do List</h1>
      <br />
      <br />
      <TodoInput onAdd={handleAddTask} />
      <ul>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            index={index}
            task={task}
            onRemove={handleRemoveTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
