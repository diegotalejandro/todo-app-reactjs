import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import "./TodoLoading.css";

function TodoLoading() {
  return (
    <div className="LoadingTodo-container">
      {/* <span className="LoadingTodo-completeIcon">
        <input type="checkbox" />
      </span> */}
      <CompleteIcon />
      <p className="LoadingTodo-text">...</p>
      <span className="LoadingTodo-deleteIcon">🗑</span>
    </div>
  );
}
export { TodoLoading };
