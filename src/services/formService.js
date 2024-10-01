export const addNewMiniature = (miniature) => {
  return fetch(`http://localhost:8088/miniatures`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(miniature),
  }).then((res) => res.json());
};

export const deleteMiniature = (miniatureId) => {
  return fetch(`http://localhost:8088/miniatures/${miniatureId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
