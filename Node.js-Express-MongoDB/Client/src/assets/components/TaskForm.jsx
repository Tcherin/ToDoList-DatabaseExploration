import { useState } from "react";
import TaskService from "../services/TaskService";

const TaskForm = ({ addTask }) => {
  const [formData, setFormData] = useState({
    description: "",
    completed: false,
  });

  const handleChange = (e) => {
    const newFormData = Object.assign({}, formData);
    newFormData.description = e.target.value;
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    TaskService.postTask(formData).then((data) => {
      addTask(data);
    });
    // Reset the form input values
    setFormData({
      description: "",
      completed: false,
    });
  };

  return (
    <div className="p-1 border-2 rounded-md bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex p-4 gap-4 justify-between items-center"
      >
        <input
          className="border-2 rounded-md"
          type="text"
          required
          placeholder=" add a task"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">
          <i className="fa-solid fa-plus border-2 text-black border-black p-1 rounded-md hover:scale-110 active:scale-90"></i>
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
