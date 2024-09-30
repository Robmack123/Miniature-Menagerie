import { useEffect, useState } from "react";
import { getMiniatureById } from "../../services/miniatureService";
import { useParams } from "react-router-dom";
import { getAllClasses } from "../../services/classesService";
import { getAllSpecies } from "../../services/speciesService";
import { getAllSizes } from "../../services/sizesService";
import { SizeFilter } from "../filters/SizeFilter";
import { ClassFilter } from "../filters/ClassFilter";
import { SpeciesFilter } from "../filters/SpeciesFilter";

export const EditMiniature = () => {
  const [currentMiniature, setCurrentMiniature] = useState({});
  const [editedMiniature, setEditedMiniature] = useState({});
  const [classes, setClasses] = useState([]);
  const [species, setSpecies] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSpecies, setSelectedSpecies] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const { miniatureId } = useParams();

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

      setSelectedClass(miniature.classId); // Assuming classId corresponds to the class
      setSelectedSpecies(miniature.speciesId); // Assuming speciesId corresponds to the species
      setSelectedSize(miniature.sizeId);
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

  return (
    <div>
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
    </div>
  );
};
