import { FILTERS } from "../constants/filters";

export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case FILTERS.ACTIVE:
      return tasks.filter((task) => !task.completed);
    case FILTERS.COMPLETED:
      return tasks.filter((task) => task.completed);
    case FILTERS.ALL:
    default:
      return tasks;
  }
};
