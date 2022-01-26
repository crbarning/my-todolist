import "./styles.css";
import { useState } from "react";
import TodoList from "./Components/TodoList/TodoList";
import TodoForm from "./Components/TodoForm/TodoForm";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (newTask) => {
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
  };

  const deleteTask = (id) => {
    const newTaskList = taskList.filter((item) => item.id != id);
    setTaskList(newTaskList);
  };

  return (
    <div className="App">
      <h1 className="header">Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={taskList} deleteTask={deleteTask} />
    </div>
  );
}
