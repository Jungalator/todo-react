export const ToDoForm = ({ handleWriteInfo, handleSubmitInfo }) => {
  const inputStyles = "";
  return (
    <form
      action=""
      onSubmit={handleSubmitInfo}
      className="flex flex-col justify-center items-center"
    >
      <input
        type="text"
        name="title"
        onChange={handleWriteInfo}
        className="w-[50%] bg-white mb-5"
      />
      <input
        type="textaria"
        name="body"
        onChange={handleWriteInfo}
        className="w-[50%] bg-white h-20 mb-5"
      />
      <button className="px-3 py-2 border border-neutral-700 rounded-xl cursor-pointer">
        Создать
      </button>
    </form>
  );
};
