import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  deleteTask,
  addTask,
  updateTask,
  newTask,
  setNewTask,
}) => {
  const listItems = tasks.map((task) => {
    return (
      <div key={task.id}>
        <TaskCard task={task} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
    );
  });

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
  };

  return (
    <main className="border-2 rounded-lg p-8 px-20 shadow-2xl bg-white">
      <h1 className="font-semibold pb-1 text-3xl text-center">Task List</h1>
      <form
        onSubmit={handleSubmit}
        className="flex p-4 justify-between items-center"
      >
        <input
          className="border-2 rounded-md"
          type="text"
          required
          placeholder=" add a task"
          value={newTask}
          onChange={handleChange}
        />
        <button type="submit">
          <i className="fa-solid fa-plus border-2 text-black border-black p-1 rounded-md hover:scale-110 active:scale-90"></i>
        </button>
      </form>
      <div className="flex flex-col gap-8">{listItems}</div>
    </main>
  );
};

export default TaskList;
