export const ClassFilter = ({ handleClassChange, selectedClass, classes }) => {
  return (
    <select
      className="filter-bar"
      onChange={handleClassChange}
      value={selectedClass}
    >
      <option value={"All"}>All Classes</option>
      {classes.map((classItem) => (
        <option key={classItem.id} value={classItem.id}>
          {classItem.name}
        </option>
      ))}
    </select>
  );
};
