import { useState, useEffect } from "react";
import { getMiniatureById } from "../../services/miniatureService";
import { Link, useParams } from "react-router-dom";
import { Miniature } from "./Miniature";
import { getSizeById } from "../../services/sizesService";
import { getClassById } from "../../services/classesService";
import { getSpeciesById } from "../../services/speciesService";
import "./miniatureDetails.css";

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
    <div className="details-container">
      <div className="miniature-wrapper">
        <Miniature miniature={miniature} disableLink={true} />
        <div className="btn-container">
          <Link to={`/vault/${miniature.id}/edit`}>
            <button className="btn">Edit</button>
          </Link>
          <button>Delete</button>
        </div>
      </div>
      <div className="details-wrapper">
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
