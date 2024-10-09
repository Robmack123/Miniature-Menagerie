import { useState, useEffect } from "react";
import {
  deleteMiniature,
  getMiniatureById,
} from "../../services/miniatureService";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Miniature } from "./Miniature";
import { getSizeById } from "../../services/sizesService";
import { getClassById } from "../../services/classesService";
import { getSpeciesById } from "../../services/speciesService";
import "./miniatureDetails.css";

export const MiniatureDetails = () => {
  // sets the miniature object that was clicked and then the properties that will be shown
  const [miniature, setMiniature] = useState({});
  const [classObj, setClassObj] = useState("");
  const [species, setSpecies] = useState("");
  const [size, setSize] = useState("");
  // used to get the miniatureId from the url
  const { miniatureId } = useParams();
  // set up navigation
  const navigate = useNavigate();

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

  const handleDeleteClick = () => {
    const userConfirm = window.confirm(
      "Are you sure you want to delete this miniature?"
    );

    if (userConfirm) {
      // deletes the currently selected miniature and takes users back to their collection
      deleteMiniature(miniature.id).then(() => {
        navigate("/vault");
      });
    }
  };

  return (
    <div className="details-container">
      <div className="miniature-wrapper">
        <Miniature
          miniature={miniature}
          disableLink={true}
          customClass="miniature-details-size"
        />
        <div className="btn-container">
          <Link to={`/vault/${miniature.id}/edit`}>
            <button className="btn">Edit</button>
          </Link>
          <button onClick={handleDeleteClick}>Delete</button>
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
