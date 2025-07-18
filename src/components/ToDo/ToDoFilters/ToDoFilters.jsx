export const ToDoFilters = ({ handleFilterTasks, filter }) => {
  const radioSize = "w-4 h-4 cursor-pointer";
  const cursorLabel = "cursor-pointer";
  return (
    <article className="flex justify-end gap-6 mb-4">
      <label className={cursorLabel}>
        <p>All</p>
        <input
          type="radio"
          id="all"
          name="filter"
          onChange={handleFilterTasks}
          checked={filter === "all" ? true : false}
          className={radioSize}
        />
      </label>
      <label className={cursorLabel}>
        <p>Active</p>
        <input
          type="radio"
          id="active"
          name="filter"
          onChange={handleFilterTasks}
          checked={filter === "active" ? true : false}
          className={radioSize}
        />
      </label>
      <label className={cursorLabel}>
        <p>Completed</p>
        <input
          type="radio"
          id="completed"
          name="filter"
          onChange={handleFilterTasks}
          checked={filter === "completed" ? true : false}
          className={radioSize}
        />
      </label>
    </article>
  );
};
