export const ToDoItem = ({
  id,
  date,
  title,
  body,
  details,
  complited,
  handleDetailsToggle,
}) => {
  console.log(details);

  return (
    <li>
      <article>
        <p>{date}</p>
        <h4>{title}</h4>
        <div onClick={() => handleDetailsToggle(id)}>
          {details ? "Скрыть детали" : "Показать детали"}
          {details && <p>{body}</p>}
        </div>
      </article>
      {/* <input type="checkbox" />
        <button type="button" onClick={""}>
          Удалить
        </button> */}
    </li>
  );
};
