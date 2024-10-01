import { useEffect, useState } from "react";
import { getMiniatureById } from "../../services/miniatureService";
import { useNavigate, useParams } from "react-router-dom";
import { getAllClasses } from "../../services/classesService";
import { getAllSpecies } from "../../services/speciesService";
import { getAllSizes } from "../../services/sizesService";
import { SizeFilter } from "../filters/SizeFilter";
import { ClassFilter } from "../filters/ClassFilter";
import { SpeciesFilter } from "../filters/SpeciesFilter";
import "./forms.css";
import { editMiniatureObj } from "../../services/formService";

export const EditMiniature = () => {
  // sets states for the current miniature object and the edited miniature object
  const [currentMiniature, setCurrentMiniature] = useState({});
  const [editedMiniature, setEditedMiniature] = useState({});
  // sets states for object properties
  const [name, setName] = useState("");
  const [classes, setClasses] = useState([]);
  const [species, setSpecies] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [painted, setPainted] = useState(false);
  const [img, setImg] = useState("");
  const [dateAcquired, setDateAcquired] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSpecies, setSelectedSpecies] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  // used to get the miniatureId from the url
  const { miniatureId } = useParams();
  // set up navigation
  const navigate = useNavigate();

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSpeciesChange = (event) => {
    setSelectedSpecies(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  // gets the current miniature that is being edited
  useEffect(() => {
    getMiniatureById(miniatureId).then((miniature) => {
      setCurrentMiniature(miniature);
      setEditedMiniature(miniature);
      setName(miniature.name);
      setSelectedClass(miniature.classId);
      setSelectedSpecies(miniature.speciesId);
      setSelectedSize(miniature.sizeId);
      setPainted(miniature.painted);
      setDateAcquired(miniature.dateAcquired);
      setImg(miniature.img_url);
    });
  }, [miniatureId]);

  useEffect(() => {
    getAllSizes().then((sizesArray) => {
      setSizes(sizesArray);
      console.log("size set");
    });
  }, []);

  useEffect(() => {
    getAllSpecies().then((speciesArray) => {
      setSpecies(speciesArray);
      console.log("species set");
    });
  }, []);

  useEffect(() => {
    getAllClasses().then((classesArray) => {
      setClasses(classesArray);
      console.log("classes set");
    });
  }, []);

  //makes a copy of the miniature object
  useEffect(() => {
    const miniatureCopy = {
      id: currentMiniature.id,
      userId: currentMiniature.userId,
      name: currentMiniature.name,
      speciesId: currentMiniature.speciesId,
      classId: currentMiniature.classId,
      painted: currentMiniature.painted,
      sizeId: currentMiniature.sizeId,
      dateAcquired: currentMiniature.dateAcquired,
      img_url: currentMiniature.img_url,
    };
    setEditedMiniature(miniatureCopy);
  }, [currentMiniature]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedMiniature = {
      ...editedMiniature,
      name: name,
      classId: parseInt(selectedClass),
      speciesId: parseInt(selectedSpecies),
      sizeId: parseInt(selectedSize),
      dateAcquired: dateAcquired,
      painted: painted,
      img_url: img,
    };
    //PUT request to update database with the edited miniature
    editMiniatureObj(updatedMiniature).then(() => {
      // takes user to the updated miniatures details
      navigate(`/vault/${miniatureId}`);
    });
  };

  return (
    <div className="edit-page">
      <div className="edit-field">
        <header className="title">
          <h1>Edit Miniature</h1>
        </header>
        <fieldset>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </fieldset>
        <fieldset>
          <div className="filter-bar">
            <SizeFilter
              handleSizeChange={handleSizeChange}
              selectedSize={selectedSize}
              sizes={sizes}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="filter-bar">
            <SpeciesFilter
              handleSpeciesChange={handleSpeciesChange}
              selectedSpecies={selectedSpecies}
              species={species}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="filter-bar">
            <ClassFilter
              handleClassChange={handleClassChange}
              selectedClass={selectedClass}
              classes={classes}
            />
          </div>
        </fieldset>
        <fieldset>
          <label>
            Date Acquired:
            <input
              type="date"
              value={dateAcquired}
              onChange={(event) => setDateAcquired(event.target.value)}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Painted:{" "}
            <input
              type="checkbox"
              checked={painted}
              onChange={(event) => setPainted(event.target.checked)}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Image Url:
            <input
              type="text"
              value={img}
              onChange={(event) => setImg(event.target.value)}
            />
          </label>
        </fieldset>
        <fieldset>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </fieldset>
      </div>
      <div className="img-container">
        <div>
          {img && (
            <img
              className="img"
              src={img}
              alt={name}
              style={{ width: "300px", height: "300px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
