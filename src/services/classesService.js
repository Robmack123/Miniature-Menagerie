export const getAllClasses = () => {
  return fetch("http://localhost:8088/classes").then((res) => res.json());
};

export const getClassById = (classId) => {
  return fetch(`http://localhost:8088/classes/${classId}`).then((res) =>
    res.json()
  );
};
