import { FILTERS } from "../../../constants/filters";

export const ToDoFilters = ({ filter, setFilter }) => {
  const handleFilterTasks = (e) => {
    setFilter(e.target.id);
  };
  const radioSize = "w-4 h-4 cursor-pointer";
  const cursorLabel = "cursor-pointer";
  return (
    <article className="flex justify-end gap-6 mb-4">
      {Object.values(FILTERS).map((type) => {
        return (
          <label className={cursorLabel} key={type}>
            <p>{type[0].toUpperCase() + type.slice(1)}</p>
            <input
              type="radio"
              id={type}
              name="filter"
              onChange={handleFilterTasks}
              checked={filter === type}
              className={radioSize}
            />
          </label>
        );
      })}
    </article>
  );
};
