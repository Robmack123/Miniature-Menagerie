import { useEffect, useState } from "react";
import { getAllMiniatures } from "../../services/miniatureService";
import { Miniature } from "./Miniature";
import { getAllClasses } from "../../services/classesService";
import { ClassFilter } from "../filters/ClassFilter";
import { getAllSpecies } from "../../services/speciesService";
import { SpeciesFilter } from "../filters/SpeciesFilter";
import { getAllSizes } from "../../services/sizesService";
import { SizeFilter } from "../filters/SizeFilter";
import "./miniatures.css";
import "../filters/filter.css";
import { PaintedFilter } from "../filters/PaintedFilter";

export const TheVault = ({ currentUser }) => {
  // sets state for the users miniatures and the states for the things to filter by
  const [miniatures, setMiniatures] = useState([]);
  const [classes, setClasses] = useState([]);
  const [species, setSpecies] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSpecies, setSelectedSpecies] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const [showPainted, setShowPainted] = useState(false);

  const filteredMiniatures = miniatures.filter((miniature) => {
    return (
      miniature.userId === currentUser.id &&
      (selectedClass === "All" ||
        miniature.classId === parseInt(selectedClass)) &&
      (selectedSpecies === "All" ||
        miniature.speciesId === parseInt(selectedSpecies)) &&
      (selectedSize === "All" || miniature.sizeId === parseInt(selectedSize)) &&
      (!showPainted || miniature.painted === false)
    );
  });

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSpeciesChange = (event) => {
    setSelectedSpecies(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const togglePaintedFilter = () => {
    setShowPainted((prev) => !prev);
  };

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
    getAllMiniatures().then((miniArray) => {
      setMiniatures(miniArray);
      console.log("minis set");
    });
  }, []);

  return (
    <div>
      <div className="filter-container">
        <div className="filter-bar">
          <SizeFilter
            handleSizeChange={handleSizeChange}
            selectedSize={selectedSize}
            sizes={sizes}
          />
        </div>
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
        <div className="filter-bar">
          <PaintedFilter
            showPainted={showPainted}
            togglePaintedFilter={togglePaintedFilter}
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
