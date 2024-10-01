export const addNewMiniature = (miniature) => {
  return fetch(`http://localhost:8088/miniatures`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(miniature),
  }).then((res) => res.json());
};

export const editMiniatureObj = (miniature) => {
  return fetch(`http://localhost:8088/miniatures/${miniature.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(miniature),
  }).then((res) => res.json());
};
