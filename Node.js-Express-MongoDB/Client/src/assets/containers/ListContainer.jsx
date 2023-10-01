import { useState, useEffect } from "react";
import TaskService from "../services/TaskService";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const ListContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    TaskService.getTasks().then((allTasks) => {
      setTasks(allTasks);
    });
  }, []);

  const addTask = (taskToAdd) => {
    setTasks([...tasks, taskToAdd]);
  };

  const deleteTask = (idToDelete) => {
    setTasks(tasks.filter((task) => task._id !== idToDelete));
  };

  const updateTask = (idToUpdate) => {
    setTasks(
      tasks.map((task) =>
        task._id === idToUpdate ? { ...task, completed: true } : task
      )
    );
  };

  return (
    <div className="min-h-screen p-4 gap-3 flex flex-col justify-center items-center bg-slate-100">
      <TaskForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      )}
    </div>
  );
};

export default ListContainer;
