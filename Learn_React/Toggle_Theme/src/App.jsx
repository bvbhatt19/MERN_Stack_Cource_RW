import React, { useState } from "react";
import "./ChecklistApp.css";

function ChecklistApp() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [checkitem, setCheckitem] = useState(false);
  const [count, setCount] = useState(0);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleBtn = () => {
    if (input.trim() !== "") {
      setList([...list, input]);
      setInput("");
    }
  };
  const handleCheckBox = (e) => {
    setCount(e.target.checked ? count + 1 : count - 1);
  };
  return (
    <div className="checklist-container">
      <h2>Checklist App</h2>

      <div className="task-input">
        <input type="text" onChange={handleInput} placeholder="Add a task..." />
        <button className="add-btn" onClick={handleBtn}>
          Add
        </button>
        <ul>
          {list.map((item, index) => (
            <div key={index}>
              <input type="checkbox" onChange={handleCheckBox} />
              {item}
            </div>
          ))}
        </ul>
      </div>

      <div className="filters">
        <button>All</button>
        <button>Completed</button>
        <button>Pending</button>
      </div>

      <ul className="task-list"></ul>

      <div className="footer">
        <span className="status">✅ Completed:{count}/</span>
        <button className="clear-btn">Clear Completed</button>
      </div>
    </div>
  );
}

export default ChecklistApp;
