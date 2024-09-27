import { useEffect, useState } from "react";
import { getAllMiniatures } from "../../services/miniatureService";

export const TheVault = () => {
  const [miniatures, setMiniatures] = useState([]);

  useEffect(() => {
    getAllMiniatures().then((miniArray) => {
      setMiniatures(miniArray);
      console.log("minis set");
    });
  }, []);

  return (
    <div>
      {miniatures.map((miniature) => (
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
