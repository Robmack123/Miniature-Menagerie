import "./filter.css";

export const SpeciesFilter = ({
  handleSpeciesChange,
  selectedSpecies,
  species,
}) => {
  return (
    <select
      className="filter-bar"
      onChange={handleSpeciesChange}
      value={selectedSpecies}
    >
      <option value={"All"}>All Species</option>
      {species.map((speciesItem) => (
        <option key={speciesItem.id} value={speciesItem.id}>
          {speciesItem.name}
        </option>
      ))}
    </select>
  );
};
