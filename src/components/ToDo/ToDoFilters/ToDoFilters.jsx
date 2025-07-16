export const ToDoFilters = () => {
  return (
    <article>
      <label htmlFor="">
        <p>Все</p>
        <input type="radio" id="all" />
      </label>
      <label htmlFor="">
        <p>Активные</p>
        <input type="radio" id="active" />
      </label>
      <label htmlFor="">
        <p>Выполненные</p>
        <input type="radio" id="completed" />
      </label>
    </article>
  );
};
