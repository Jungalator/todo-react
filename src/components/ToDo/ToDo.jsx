import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ToDoForm } from "./ToDoForm/ToDoForm";
import { ToDoFilters } from "./ToDoFilters/ToDoFilters";
import { ToDoList } from "./ToDoList/ToDoList";
import { filterTasks } from "../../helpers/filterTasks";
import { FILTERS } from "../../constants/filters";

export const ToDo = () => {
  const [localStorageTasks, setLocalTasks] = useLocalStorage("todo", "");
  const [task, setTask] = useState({
    id: null,
    date: "",
    title: "",
    body: "",
    details: false,
    completed: false,
  });
  const [submitedData, setSubmitedData] = useState(localStorageTasks || []);
  const [filter, setFilter] = useState(FILTERS.ALL);

  const visibleTasks = filterTasks(submitedData, filter);

  const handleWriteInfo = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitInfo = (e) => {
    e.preventDefault();

    const taskObj = {
      ...task,
      id: Date.now(),
      date: `${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()}`,
    };
    const newTasks = [...submitedData, taskObj];
    setSubmitedData(newTasks);
    setLocalTasks(newTasks);
    e.target.reset();
  };

  const handleRemoveTask = (id) => {
    const filteredTasks = submitedData.filter((task) => task.id !== id);
    setSubmitedData(filteredTasks);
    setLocalTasks(filteredTasks);
  };

  const toggleTaskDetails = (id) => {
    const activeDetailsTask = submitedData.map((item) =>
      item.id === id ? { ...item, details: !item.details } : item
    );
    setSubmitedData(activeDetailsTask);
    setLocalTasks(activeDetailsTask);
  };

  const toggleCompletedStatus = (id) => {
    const completedTask = submitedData.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setSubmitedData(completedTask);
    setLocalTasks(completedTask);
  };

  return (
    <div className="text-center w-[90%] mx-auto   pt-7 p-5 ">
      <h1 className="text-5xl font-bold mb-10 text-shadow-md text-neutral-700">
        ToDo App
      </h1>
      <ToDoForm
        handleWriteInfo={handleWriteInfo}
        handleSubmitInfo={handleSubmitInfo}
      />
      <ToDoFilters filter={filter} setFilter={setFilter} />
      <ToDoList
        toggleTaskDetails={toggleTaskDetails}
        toggleCompletedStatus={toggleCompletedStatus}
        handleRemoveTask={handleRemoveTask}
        visibleTasks={visibleTasks}
      />
    </div>
  );
};
