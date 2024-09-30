import { useState, useEffect } from "react";
import { getMiniatureById } from "../../services/miniatureService";
import { useParams } from "react-router-dom";
import { Miniature } from "./Miniature";

export const MiniatureDetails = () => {
  const [miniature, setMiniature] = useState({});
  const { miniatureId } = useParams();

  useEffect(() => {
    getMiniatureById(miniatureId).then((data) => {
      setMiniature(data);
    });
  }, [miniatureId]);

  return (
    <div>
      <div>
        <Miniature miniature={miniature} disableLink={true} />
      </div>
      <div>
        <section>
          <header>{miniature.name}</header>
          <h2></h2>
        </section>
      </div>
    </div>
  );
};
