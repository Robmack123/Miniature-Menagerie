import { useEffect, useState } from "react";
import { getAllSizes } from "../../services/sizesService";
import { getAllSpecies } from "../../services/speciesService";
import { getAllClasses } from "../../services/classesService";
import { SizeFilter } from "../filters/SizeFilter";
import { SpeciesFilter } from "../filters/SpeciesFilter";
import { ClassFilter } from "../filters/ClassFilter";
import { addNewMiniature } from "../../services/formService";
import { useNavigate } from "react-router-dom";

export const AddANewMiniature = ({ currentUser }) => {
  // set state for each property of miniature object
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

  // Fetch size, species, and classes
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // check to make sure all fields are filled out
    if (
      !name ||
      selectedClass === "All" ||
      selectedSize === "All" ||
      selectedSpecies === "All" ||
      !dateAcquired ||
      !img
    ) {
      alert("Please fill out all fields before submitting");
      return;
    }

    // create a new miniature object
    const miniatureToSubmit = {
      userId: currentUser.id,
      name: name,
      speciesId: parseInt(selectedSpecies),
      classId: parseInt(selectedClass),
      painted: painted,
      sizeId: parseInt(selectedSize),
      dateAcquired: dateAcquired,
      img_url: img,
    };

    // function to add miniature to the database and then resets the form.
    addNewMiniature(miniatureToSubmit).then((newMiniature) => {
      setName("");
      setSelectedClass("All");
      setSelectedSize("All");
      setSelectedSpecies("All");
      setPainted(false);
      setImg("");
      setDateAcquired("");

      // takes user to the new miniatures detail page
      navigate(`/vault/${newMiniature.id}`);
    });
  };

  return (
    <div className="edit-page">
      <div className="edit-field">
        <header className="title">
          <h1>Add a Miniature</h1>
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
