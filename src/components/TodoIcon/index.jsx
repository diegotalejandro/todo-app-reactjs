import { VscTrash, VscCheck } from "react-icons/vsc";
import "./TodoIcon.css";

const iconTypes = {
  check: (color, completed) => (
    <VscCheck
      className={`TodoIcon-SVG ${
        completed
          ? "Icon-SVG--check--completed"
          : "Icon-SVG--check--notCompleted"
      }`}
      fill={color}
    />
  ),
  delete: (color) => (
    // <VscTrash className="TodoIcon-SVG Icon-SVG--delete" fill={color} />
    <span className="TodoIcon-SVG Icon-SVG--delete">🗑</span>
  ),
};

function TodoIcon({ type, color = "gray", completed = false, onClick }) {
  return (
    <span className={`TodoIcon-container TodoIcon--${type}`} onClick={onClick}>
      {iconTypes[type](color, completed)}
    </span>
  );
}

export { TodoIcon };
