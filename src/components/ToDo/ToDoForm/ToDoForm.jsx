export const ToDoForm = ({ handleWriteInfo, handleSubmitInfo }) => {
  return (
    <form
      action=""
      onSubmit={handleSubmitInfo}
      className="flex flex-col justify-center items-center"
    >
      <label className="w-[50%] flex flex-col text-start">
        <span className="mb-1 text-neutral-600">Task title</span>
        <input
          type="text"
          name="title"
          onChange={handleWriteInfo}
          className="w-[100%] bg-white mb-5 h-10 px-2 placeholder:text-neutral-500 border-none rounded-lg shadow-md"
          placeholder="Task title..."
          required
        />
      </label>
      <label className="w-[50%] flex flex-col text-start">
        <span className="mb-1 text-neutral-600">Task body</span>
        <textarea
          name="body"
          onChange={handleWriteInfo}
          className="w-[100%] bg-white mb-5 p-2 h-25 resize-none placeholder:text-neutral-500 shadow-md rounded-lg"
          placeholder="Task body..."
          required
        />
      </label>

      <button className="active-btn">Create</button>
    </form>
  );
};
