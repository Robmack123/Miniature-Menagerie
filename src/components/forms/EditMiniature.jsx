import { useEffect, useState } from "react";
import { getMiniatureById } from "../../services/miniatureService";
import { useParams } from "react-router-dom";
import { getAllClasses } from "../../services/classesService";
import { getAllSpecies } from "../../services/speciesService";
import { getAllSizes } from "../../services/sizesService";

export const EditMiniature = () => {
  const [currentMiniature, setCurrentMiniature] = useState(null);
  const [editedMiniature, setEditedMiniature] = useState(null);
  const [allClasses, setAllClasses] = useState([]);
  const [allSpecies, setAllSpecies] = useState([]);
  const [allSizes, setAllSizes] = useState([]);
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSpecies, setSelectedSpecies] = useState("All");
  const [selectedSize, setSelectedSize] = useState("All");
  const { miniatureId } = useParams();

  useEffect(() => {
    getMiniatureById(miniatureId).then((miniature) => {
      setCurrentMiniature(miniature);
      setEditedMiniature(miniature);
    });
  }, [miniatureId]);

  useEffect(() => {
    getAllClasses().then((classesArray) => {
      setAllClasses(classesArray);
    });
  }, []);

  useEffect(() => {
    getAllSpecies().then((speciesArray) => {
      setAllSpecies(speciesArray);
    });
  }, []);

  useEffect(() => {
    getAllSizes().then((sizesArray) => {
      setAllSizes(sizesArray);
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
      <fieldset></fieldset>
    </div>
  );
};
