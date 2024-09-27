import { useEffect, useState } from "react";
import { getAllMiniatures } from "../../services/miniatureService";

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
        <div key={miniature.id}>
          <h1>{miniature.name}</h1>
          <div>
            <img src={miniature.img_url} alt={miniature.name} />
          </div>
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
