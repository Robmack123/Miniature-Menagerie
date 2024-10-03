export const PaintedFilter = ({ showPainted, togglePaintedFilter }) => {
  // Paint checkbox
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
