export const ToDoItem = ({
  id,
  date,
  title,
  body,
  details,
  completed,
  handleDetailsToggle,
  handleIsCompleted,
  handleRemoveTask,
}) => {
  return (
    <li className=" p-3  border-none rounded-lg shadow-md bg-white mb-4">
      <div className="flex w-[100%] items-center">
        <article className="text-start w-60 mr-38.5">
          <p className="mb-3  text-xs text-neutral-600">{date}</p>
          <h4 className="mb-3 font-semibold">{title}</h4>
        </article>
        <input
          className="cursor-pointer w-5 h-5 mr-75"
          type="checkbox"
          onChange={() => handleIsCompleted(id)}
          checked={completed}
        />
        <button
          className={completed ? "active-btn" : "non-active-btn"}
          type="button"
          onClick={() => completed && handleRemoveTask(id)}
        >
          Delete
        </button>
      </div>
      <div onClick={() => handleDetailsToggle(id)} className="text-sm w-[100%]">
        {details ? (
          <p className="pb-3 text-neutral-600 cursor-pointer ">
            Hide details ▲
          </p>
        ) : (
          <p className="text-neutral-600 cursor-pointer">Show details ▼</p>
        )}

        {details && <p className="text-start">{body}</p>}
      </div>
    </li>
  );
};
