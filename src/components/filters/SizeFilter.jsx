export const SizeFilter = ({ handleSizeChange, selectedSize, sizes }) => {
  // Dropdown of all Sizes
  return (
    <select
      className="filter-bar"
      onChange={handleSizeChange}
      value={selectedSize}
    >
      <option value={"All"}>All Sizes</option>
      {sizes.map((sizeItem) => (
        <option key={sizeItem.id} value={sizeItem.id}>
          {sizeItem.name}
        </option>
      ))}
    </select>
  );
};
