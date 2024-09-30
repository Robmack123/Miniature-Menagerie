import { useState, useEffect } from "react";
import { getMiniatureById } from "../../services/miniatureService";
import { useParams } from "react-router-dom";
import { Miniature } from "./Miniature";
import { getSizeById } from "../../services/sizesService";
import { getClassById } from "../../services/classesService";
import { getSpeciesById } from "../../services/speciesService";

export const MiniatureDetails = () => {
  const [miniature, setMiniature] = useState({});
  const [classObj, setClassObj] = useState("");
  const [species, setSpecies] = useState("");
  const [size, setSize] = useState("");
  const { miniatureId } = useParams();

  useEffect(() => {
    getMiniatureById(miniatureId).then((data) => {
      setMiniature(data);

      getClassById(data.classId).then((classData) => {
        setClassObj(classData.name);
      });

      getSpeciesById(data.speciesId).then((speciesData) => {
        setSpecies(speciesData.name);
      });

      getSizeById(data.sizeId).then((sizeData) => {
        setSize(sizeData.name);
      });
    });
  }, [miniatureId]);

  return (
    <div>
      <div>
        <Miniature miniature={miniature} disableLink={true} />
      </div>
      <div className="btn-container">
        <button className="btn">Edit</button>
        <button>Delete</button>
      </div>
      <div>
        <section>
          <h2>Class: {classObj}</h2>
          <h2>Species: {species}</h2>
          <h2>Size: {size}</h2>
          <h2>Date Acquired: {miniature.dateAcquired}</h2>
        </section>
      </div>
    </div>
  );
};
