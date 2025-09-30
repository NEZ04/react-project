import { useState } from "react";
import "./todo.css";
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
  const [inputValue, setValue] = useState("");
  const [task, setTask] = useState([]);
  const[dateTime,setDateTime]=useState("");
  const handleChange = (value) => {
    setValue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setValue("");
      return;
    }
    setTask((prev) => [...prev, inputValue]);
    setValue("");
  };
  setInterval(()=>{
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime=now.toLocaleTimeString();
    setDateTime(`${formattedDate}-${formattedTime}`);
  },1000);
  
  const handleClearAll=()=>{
    setTask([]);
  }

  const handleTodoDelete=(value)=>{
    const updatedTask=task.filter((currElem)=>  currElem !== value);
    setTask(updatedTask);
  };
  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              className="todo-input"
              autoComplete="off"
              value={inputValue}
              onChange={(event) => handleChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
        <section className="myUnOrdList">
          <ul >
            {task.map((currElem, index) => {
              return(
              <li index={index} className="todo-item">
              <span>{currElem}</span>
              <button className="check-btn"><MdCheck /></button>
              <button className="delete-btn" onClick={()=>handleTodoDelete(currElem)}><MdDeleteForever/></button>
              </li>
              );
            }
            )}
          </ul>
         
        </section>
         
      </section>
      <section> 
           <button className="clear-btn" onClick={handleClearAll}>Clear All</button> 
            </section>
    </section>
  );
};
