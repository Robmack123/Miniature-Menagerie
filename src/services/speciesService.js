export const getAllSpecies = () => {
  return fetch("http://localhost:8088/species").then((res) => res.json());
};
