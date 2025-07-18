import { ToDoItem } from "../ToDoItem/ToDoItem";

export const ToDoList = ({
  submitedData,
  handleDetailsToggle,
  handleIsCompleted,
  handleRemoveTask,
  filter,
}) => {
  return (
    <ul>
      {submitedData.length > 0 ? (
        submitedData
          .filter((task) => {
            const activeTask = filter === "active" && !task.completed;
            const completedTask = filter === "completed" && task.completed;
            const allTasks = filter === "all";
            if (activeTask || completedTask || allTasks) {
              return task;
            }
          })
          .map(({ id, date, title, body, details, completed }) => {
            return (
              <ToDoItem
                key={id}
                id={id}
                date={date}
                title={title}
                body={body}
                details={details}
                completed={completed}
                handleDetailsToggle={handleDetailsToggle}
                handleIsCompleted={handleIsCompleted}
                handleRemoveTask={handleRemoveTask}
              />
            );
          })
      ) : (
        <h4>No active tasks</h4>
      )}
    </ul>
  );
};
