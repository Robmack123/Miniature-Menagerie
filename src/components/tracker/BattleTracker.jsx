import { useEffect, useState } from "react";
import { getAllMiniatures } from "../../services/miniatureService";
import "./battleTracker.css";

export const BattleTracker = ({ currentUser }) => {
  const [miniatures, setMiniatures] = useState([]);
  const [selectedMiniatures, setSelectedMiniatures] = useState([]);
  const [initiativeOrder, setInitiativeOrder] = useState([]);

  useEffect(() => {
    getAllMiniatures().then((miniArray) => {
      const userMiniatures = miniArray.filter(
        (mini) => mini.userId === currentUser.id
      );
      setMiniatures(userMiniatures);
    });
  }, [currentUser]);

  const handleSelectMiniature = (miniature) => {
    setSelectedMiniatures([
      ...selectedMiniatures,
      { ...miniature, initiative: "" },
    ]);
  };

  const handleRollInitiative = () => {
    const rolledInitiative = selectedMiniatures.map((mini) => ({
      ...mini,
      initiative: Math.floor(Math.random() * 20) + 1,
    }));

    const sortedInitiative = rolledInitiative.sort(
      (a, b) => b.initiative - a.initiative
    );
    setInitiativeOrder(sortedInitiative);
  };

  return (
    <div className="tracker-container">
      <h2>Battle Tracker</h2>

      <div>
        <h3>Select Miniatures for Combat</h3>
        {miniatures.map((mini) => (
          <div key={mini.id}>
            <input
              type="checkbox"
              onChange={() => handleSelectMiniature(mini)}
            />
            {mini.name}
          </div>
        ))}
      </div>

      <button onClick={handleRollInitiative}>Roll Initiative</button>

      <div>
        <h3>Initiative Order</h3>
        <ul>
          {initiativeOrder.map((mini, index) => (
            <li key={mini.id}>
              {index + 1}. {mini.name} (Initiative: {mini.initiative})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
