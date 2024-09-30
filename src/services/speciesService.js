export const getAllSpecies = () => {
  return fetch("http://localhost:8088/species").then((res) => res.json());
};

export const getSpeciesById = (speciesId) => {
  return fetch(`http://localhost:8088/species/${speciesId}`).then((res) =>
    res.json()
  );
};
