export const getAllSizes = () => {
  return fetch("http://localhost:8088/sizes").then((res) => res.json());
};

export const getSizeById = (sizeId) => {
  return fetch(`http://localhost:8088/sizes/${sizeId}`).then((res) =>
    res.json()
  );
};
