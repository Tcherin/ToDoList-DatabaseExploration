import { removeTask } from "./TaskService";
import { putTask } from "./TaskService";

const TaskCard = ({ task, deleteTask, updateTask }) => {
  const handleDelete = () => {
    removeTask(task._id).then(() => {
      deleteTask(task._id);
    });
  };

  const handleUpdate = () => {
    putTask(task._id).then(() => {
      updateTask(task._id);
    });
  };

  return (
    <div className="border-2 p-3 rounded-md flex justify-between gap-14">
      <p>{task.description}</p>
      <div className="flex gap-2">
        <button
          onClick={() => {
            handleDelete(task);
          }}
        >
          <i className="fa-solid fa-x border-2 text-red-500 border-red-500 p-1 rounded-md hover:scale-110 active:scale-90"></i>
        </button>
        <button
          onClick={() => {
            handleUpdate(task);
          }}
        >
          {task.completed === false ? (
            <i className="fa-solid fa-check border-2 text-yellow-500 border-yellow-500 p-1 rounded-md hover:scale-110 active:scale-90"></i>
          ) : (
            <i className="fa-solid fa-check border-2 text-white border-yellow-500 bg-yellow-500 p-1 rounded-md hover:scale-110 active:scale-90"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
