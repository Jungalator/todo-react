import { ToDoItem } from "../ToDoItem/ToDoItem";

export const ToDoList = ({
  toggleTaskDetails,
  toggleCompletedStatus,
  handleRemoveTask,
  visibleTasks,
}) => {
  return (
    <ul>
      {visibleTasks.length > 0 ? (
        visibleTasks.map(({ id, date, title, body, details, completed }) => {
          return (
            <ToDoItem
              key={id}
              id={id}
              date={date}
              title={title}
              body={body}
              details={details}
              completed={completed}
              toggleTaskDetails={toggleTaskDetails}
              toggleCompletedStatus={toggleCompletedStatus}
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
