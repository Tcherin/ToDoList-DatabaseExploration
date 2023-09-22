import { useState, useEffect } from "react";
import { getTasks } from "../components/TaskService";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const ListContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((allTasks) => {
      setTasks(allTasks);
    });
  }, []);

  const deleteTask = (task) => {
    if (task.completed === true) {
      const updatedTasks = tasks.filter((t) => t._id !== task._id);
      setTasks(updatedTasks);
    }
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (task) => {
    const updatedTasks = tasks.map((t) =>
      t._id === task._id ? { ...t, completed: true } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
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
