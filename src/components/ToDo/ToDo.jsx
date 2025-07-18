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
    completed: false,
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
      date: `${new Date().getDate()}.${
        new Date().getMonth() + 1
      }.${new Date().getFullYear()}`,
    };
    setSubmitedData((prev) => [...prev, taskObj]);
    setLocalTasks([...submitedData, taskObj]);
    e.target.reset();
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

  const handleIsCompleted = (id) => {
    const completedTask = submitedData.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setSubmitedData(completedTask);
    setLocalTasks(completedTask);
  };

  const handleFilterTasks = (e) => {
    setFilter(e.target.id);
  };

  return (
    <div className="text-center w-[90%] mx-auto   pt-7 p-5 ">
      <ToDoForm
        handleWriteInfo={handleWriteInfo}
        handleSubmitInfo={handleSubmitInfo}
      />
      <ToDoFilters handleFilterTasks={handleFilterTasks} filter={filter} />
      <ToDoList
        submitedData={submitedData}
        handleDetailsToggle={handleDetailsToggle}
        handleIsCompleted={handleIsCompleted}
        handleRemoveTask={handleRemoveTask}
        filter={filter}
      />
    </div>
  );
};
