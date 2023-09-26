const baseURL = "http://localhost:4000/api/tasks/";

const TaskService = {
  getTasks() {
    return fetch(baseURL).then((res) => res.json());
  },

  postTask(payload) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  },

  removeTask(id) {
    return fetch(baseURL + id, {
      method: "DELETE",
    });
  },

  putTask(id, payload) {
    return fetch(baseURL + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  },
};

export default TaskService;
