export const getAllMiniatures = () => {
  return fetch(`http://localhost:8088/miniatures`).then((res) => res.json());
};

export const getMiniatureById = (miniatureId) => {
  return fetch(`http://localhost:8088/miniatures/${miniatureId}`).then((res) =>
    res.json()
  );
};

export const deleteMiniature = (miniatureId) => {
  return fetch(`http://localhost:8088/miniatures/${miniatureId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
