import { useEffect, useState } from "react";
import {
  editMiniatureObj,
  getMiniatureById,
} from "../../services/miniatureService";
import { useNavigate, useParams } from "react-router-dom";
import { getAllClasses } from "../../services/classesService";
import { getAllSpecies } from "../../services/speciesService";
import { getAllSizes } from "../../services/sizesService";
import { SizeFilter } from "../filters/SizeFilter";
import { ClassFilter } from "../filters/ClassFilter";
import { SpeciesFilter } from "../filters/SpeciesFilter";

export const EditMiniature = () => {
  const [currentMiniature, setCurrentMiniature] = useState({});
  const [editedMiniature, setEditedMiniature] = useState({});
  const [name, setName] = useState("");
  const [classes, setClasses] = useState([]);
  const [species, setSpecies] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSpecies, setSelectedSpecies] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [painted, setPainted] = useState(false);
  const [img, setImg] = useState("");
  const [dateAcquired, setDateAcquired] = useState("");
  const { miniatureId } = useParams();

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

    editMiniatureObj(updatedMiniature).then(() => {
      navigate(`/vault/${miniatureId}`);
    });
  };

  return (
    <div>
      <div className="Edit field">
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
      <div>
        <div>{img && <img src={img} alt={name} />}</div>
      </div>
    </div>
  );
};
