import TaskCard from "./TaskCard";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const listItems = tasks.map((task) => {
    return (
      <div key={task._id}>
        <TaskCard task={task} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
    );
  });

  return (
    <main className="flex flex-col border-2 rounded-lg p-8 px-20 shadow-2xl bg-white gap-4">
      <h1 className="font-semibold pb-1 text-3xl text-center">Task List</h1>
      <div className="flex flex-col gap-8">{listItems}</div>
    </main>
  );
};

export default TaskList;
