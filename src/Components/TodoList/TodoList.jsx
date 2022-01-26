export default function TodoList(props) {
  const handleDelete = (event) => {
    props.deleteTask(event.target.dataset.id);
  };

  const taskList = props.tasks.map((item) => (
    <li key={item.id}>
      {item.task}
      <button data-id={item.id} onClick={handleDelete} className="xbtn">
        Delete
      </button>
    </li>
  ));
  return <ul>{taskList}</ul>;
}
