export const getAllMiniatures = () => {
  return fetch(`http://localhost:8088/miniatures`).then((res) => res.json());
};

export const addNewMiniature = (miniature) => {
  return fetch(`http://localhost:8088/miniatures`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(miniature),
  });
};

export const getMiniatureById = (miniatureId) => {
  return fetch(`http://localhost:8088/miniatures/${miniatureId}`).then((res) =>
    res.json()
  );
};
