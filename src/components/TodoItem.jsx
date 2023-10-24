/* eslint-disable */
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "../styles/TodoItem.module.css";

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>

        <button onClick={handleEditing} type="button">
          Edit
        </button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      </div>
      <input
        type="text"
        style={editMode}
        value={itemProp.title}
        className="textInput"
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.string.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;
