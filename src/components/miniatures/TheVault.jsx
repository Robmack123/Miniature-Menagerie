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

  const [currentPage, setCurrentPage] = useState(1);
  const miniaturesPerPage = 3;

  const filteredMiniatures = miniatures.filter((miniature) => {
    return (
      // shows only the users current miniatures
      miniature.userId === currentUser.id &&
      //filters class, size, and species and checks whether the id matches the selected option
      (selectedClass === "All" ||
        miniature.classId === parseInt(selectedClass)) &&
      (selectedSpecies === "All" ||
        miniature.speciesId === parseInt(selectedSpecies)) &&
      (selectedSize === "All" || miniature.sizeId === parseInt(selectedSize)) &&
      (!showPainted || miniature.painted === false)
    );
  });

  const indexOfLastMiniature = currentPage * miniaturesPerPage;
  const indexOfFirstMiniature = indexOfLastMiniature - miniaturesPerPage;
  const currentMiniatures = filteredMiniatures.slice(
    indexOfFirstMiniature,
    indexOfLastMiniature
  );
  const totalPages = Math.ceil(filteredMiniatures.length / miniaturesPerPage);

  // handles the changes of the dropdown menus and changes the set state to the one chosen
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

  // gets all the sizes, species, classes, and miniatures from the database
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

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="filter-container">
        <div className="filter-bar">
          {/* Size dropdown */}
          <SizeFilter
            handleSizeChange={handleSizeChange}
            selectedSize={selectedSize}
            sizes={sizes}
          />
        </div>
        <div className="filter-bar">
          {/* species dropdown */}
          <SpeciesFilter
            handleSpeciesChange={handleSpeciesChange}
            selectedSpecies={selectedSpecies}
            species={species}
          />
        </div>
        <div className="filter-bar">
          {/* class dropdown */}
          <ClassFilter
            handleClassChange={handleClassChange}
            selectedClass={selectedClass}
            classes={classes}
          />
        </div>
        <div className="filter-bar">
          {/* painted button */}
          <PaintedFilter
            showPainted={showPainted}
            togglePaintedFilter={togglePaintedFilter}
          />
        </div>
      </div>
      <div className="miniature-list">
        {/* renders all the users miniatures */}
        {currentMiniatures.map((miniature) => (
          <Miniature key={miniature.id} miniature={miniature} />
        ))}
      </div>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage ===
            Math.ceil(filteredMiniatures.length / miniaturesPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
