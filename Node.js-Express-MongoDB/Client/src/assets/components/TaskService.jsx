const baseURL = "http://localhost:4000/api/tasks/";

export const getTasks = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postTask = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const removeTask = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};

export const putTask = (id, payload) => {
  return fetch(baseURL + id, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
