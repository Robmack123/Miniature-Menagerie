export const getAllMiniatures = () => {
  return fetch(`http://localhost:8088/miniatures`).then((res) => res.json());
};
