import { ToDoItem } from "../ToDoItem/ToDoItem";

export const ToDoList = ({ submitedData, handleDetailsToggle }) => {
  console.log(submitedData);

  return (
    <ul>
      {
        //   submitedData.lenght > 0 ? (
        submitedData.map(({ id, date, title, body, details, complited }) => {
          return (
            <ToDoItem
              id={id}
              date={date}
              title={title}
              body={body}
              details={details}
              complited={complited}
              handleDetailsToggle={handleDetailsToggle}
            />
          );
        })
        // ) : (
        //   <h4>Нет активных тасок</h4>
        //       )
      }
    </ul>
  );
};
