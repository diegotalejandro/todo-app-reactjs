import { TodoIcon } from ".";

function CompleteIcon({ completed, onComplete, onNotComplete }) {
  return (
    <>
      <TodoIcon
        type="check"
        color={completed ? "#4caf50" : "gray"}
        completed={completed}
        onClick={completed ? onNotComplete : onComplete}
      />
    </>
  );
}

export { CompleteIcon };
