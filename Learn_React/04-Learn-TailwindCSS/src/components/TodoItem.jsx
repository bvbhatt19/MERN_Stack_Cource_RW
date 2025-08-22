import { useState } from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
  RiIndeterminateCircleLine,
} from "react-icons/ri";

function TodoItem({ task, index, onRemove }) {
  const [done, setDone] = useState(false);

  const toggleDone = () => {
    setDone(!done);
  };

  return (
    <li className="todo-item">
      <span onClick={toggleDone} className="icon">
        {done ? <RiCheckboxCircleLine /> : <RiCheckboxBlankCircleLine />}
      </span>
      <span className={`task-text ${done ? "done" : ""}`}>{task}</span>
      <span onClick={() => onRemove(index)} className="icon">
        <RiIndeterminateCircleLine />
      </span>
    </li>
  );
}

export default TodoItem;
