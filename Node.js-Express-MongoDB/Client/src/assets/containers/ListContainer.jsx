import { useState, useEffect } from "react";
import { getTasks } from "../components/TaskService";
import TaskList from "../components/TaskList";

const ListContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    getTasks().then((allTasks) => {
      setTasks(allTasks);
    });
  }, []);

  const deleteTask = (task) => {
    if (task.completed === true) {
      const updatedTasks = tasks.filter((t) => t.id !== task.id);
      setTasks(updatedTasks);
    }
  };

  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      const newObj = {
        description: newTask,
        completed: false,
        id: tasks.length + 1,
      };
      setTasks([...tasks, newObj]);
      setNewTask("");
    }
  };

  const updateTask = (task) => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: true } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-100">
      {tasks && (
        <TaskList
          tasks={tasks}
          newTask={newTask}
          deleteTask={deleteTask}
          addTask={addTask}
          updateTask={updateTask}
          setNewTask={setNewTask}
        />
      )}
    </div>
  );
};

export default ListContainer;
