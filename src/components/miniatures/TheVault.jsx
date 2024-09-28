import { useEffect, useState } from "react";
import { getAllMiniatures } from "../../services/miniatureService";
import { Miniature } from "./Miniature";
import "./miniatures.css";
import { getAllClasses } from "../../services/classesService";
import { ClassFilter } from "../filters/ClassFilter";
import { getAllSpecies } from "../../services/speciesService";
import { SpeciesFilter } from "../filters/SpeciesFilter";

export const TheVault = ({ currentUser }) => {
  const [miniatures, setMiniatures] = useState([]);
  const [classes, setClasses] = useState([]);
  const [species, setSpecies] = useState([]);
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSpecies, setSelectedSpecies] = useState("All");

  const filteredMiniatures = miniatures.filter((miniature) => {
    return (
      miniature.userId === currentUser.id &&
      (selectedClass === "All" ||
        miniature.classId === parseInt(selectedClass)) &&
      (selectedSpecies === "All" ||
        miniature.speciesId === parseInt(selectedSpecies))
    );
  });

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSpeciesChange = (event) => {
    setSelectedSpecies(event.target.value);
  };

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
    getAllMiniatures().then((miniArray) => {
      setMiniatures(miniArray);
      console.log("minis set");
    });
  }, []);

  return (
    <div>
      <div className="filter-container">
        <div className="filter-bar">
          <SpeciesFilter
            handleSpeciesChange={handleSpeciesChange}
            selectedSpecies={selectedSpecies}
            species={species}
          />
        </div>
        <div className="filter-bar">
          <ClassFilter
            handleClassChange={handleClassChange}
            selectedClass={selectedClass}
            classes={classes}
          />
        </div>
      </div>
      <div className="miniature-list">
        {filteredMiniatures.map((miniature) => (
          <Miniature key={miniature.id} miniature={miniature} />
        ))}
      </div>
    </div>
  );
};
