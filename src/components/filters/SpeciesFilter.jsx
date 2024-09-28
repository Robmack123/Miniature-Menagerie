export const SpeciesFilter = ({
  handleSpeciesChange,
  selectedSpecies,
  species,
}) => {
  return (
    <select onChange={handleSpeciesChange} value={selectedSpecies}>
      <option value={"All"}>All Species</option>
      {species.map((speciesItem) => (
        <option key={speciesItem.id} value={speciesItem.id}>
          {speciesItem.name}
        </option>
      ))}
    </select>
  );
};
