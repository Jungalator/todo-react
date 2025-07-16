import { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ToDoForm } from "./ToDoForm/ToDoForm";
import { ToDoFilters } from "./ToDoFilters/ToDoFilters";
import { ToDoList } from "./ToDoList/ToDoList";

export const ToDo = () => {
  const [localStorageTasks, setLocalTasks] = useLocalStorage("todo", "");
  const [task, setTask] = useState({
    id: null,
    date: "",
    title: "",
    body: "",
    details: false,
    complited: false,
  });
  const [submitedData, setSubmitedData] = useState(localStorageTasks || []);
  const [filter, setFilter] = useState("all");
  const [inputValue, setInputValue] = useState(null);

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
      date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
    };
    setSubmitedData((prev) => [...prev, taskObj]);
    setLocalTasks([...submitedData, taskObj]);
  };

  const handleRemoveTask = (id) => {
    const filteredTasks = submitedData.filter((task) => task.id !== id);
    setSubmitedData(filteredTasks);
    setLocalTasks(filteredTasks);
  };

  const handleDetailsToggle = (id) => {
    const activeDetailsTask = submitedData.map((item) =>
      item.id === id ? { ...item, details: !item.details } : item
    );
    setSubmitedData(activeDetailsTask);
    setLocalTasks(activeDetailsTask);
  };
  return (
    <div className="text-center bg-neutral-500 w-[100%]  mx-auto  border-none rounded-xl pt-7 p-5 mt-9">
      <ToDoForm
        handleWriteInfo={handleWriteInfo}
        handleSubmitInfo={handleSubmitInfo}
      />
      <ToDoFilters />
      <ToDoList
        submitedData={submitedData}
        handleDetailsToggle={handleDetailsToggle}
      />
    </div>
  );
};
