import { useEffect, useState } from "react";
import { getAllMiniatures } from "../../services/miniatureService";
import { Miniature } from "./Miniature";
import "./miniatures.css";

export const TheVault = ({ currentUser }) => {
  const [miniatures, setMiniatures] = useState([]);

  const userMiniatures = miniatures.filter((miniature) => {
    return miniature.userId === currentUser.id;
  });

  useEffect(() => {
    getAllMiniatures().then((miniArray) => {
      setMiniatures(miniArray);
      console.log("minis set");
    });
  }, []);

  return (
    <div className="miniature-list">
      {userMiniatures.map((miniature) => (
        <Miniature key={miniature.id} miniature={miniature} />
      ))}
    </div>
  );
};
