import { useEffect, useState } from "react";
import { getAllMiniatures } from "../../services/miniatureService";
import { Miniature } from "./Miniature";

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
    <div>
      {userMiniatures.map((miniature) => (
        <Miniature key={miniature.id} miniature={miniature} />
      ))}
    </div>
  );
};
