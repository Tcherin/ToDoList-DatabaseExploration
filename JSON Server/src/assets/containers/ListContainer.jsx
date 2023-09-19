import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";

const ListContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    fetch("http://localhost:8000/tasks")
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for this resource");
        }
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  };

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
      {error && <div>{error}</div>}
      {isPending && <div className="p-6">Loading...</div>}
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
