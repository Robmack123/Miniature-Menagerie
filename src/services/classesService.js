export const getAllClasses = () => {
  return fetch("http://localhost:8088/classes").then((res) => res.json());
};
