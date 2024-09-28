export const PaintedFilter = ({ showPainted, togglePaintedFilter }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={showPainted}
        onChange={togglePaintedFilter}
      />{" "}
      Show only unpainted miniatures
    </label>
  );
};
