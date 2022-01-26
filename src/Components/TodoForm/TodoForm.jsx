import { useState } from "react";

export default function TodoForm(props) {
  const [nextId, setNextId] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskField = document.querySelector("[name=item-name]");

    if (taskField.value.trim().length > 0) {
      props.addTask({
        task: taskField.value,
        id: nextId
      });
      taskField.value = "";
      setNextId(nextId + 1);
    }
  };

  return (
    <form action="#" method="GET" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          name="item-name"
          placeholder="add a new todo..."
          className="add-task"
        />
        <button type="submit" className="addbtn">
          Add
        </button>
        <hr />
      </div>
    </form>
  );
}