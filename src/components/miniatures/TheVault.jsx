import { useEffect, useState } from "react";
import { getAllMiniatures } from "../../services/miniatureService";
import { Miniature } from "./Miniature";
import "./miniatures.css";
import { getAllClasses } from "../../services/classesService";
import { ClassFilter } from "../filters/ClassFilter";

export const TheVault = ({ currentUser }) => {
  const [miniatures, setMiniatures] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("All");

  const filteredMiniatures = miniatures.filter((miniature) => {
    return (
      miniature.userId === currentUser.id &&
      (selectedClass === "All" || miniature.classId === parseInt(selectedClass))
    );
  });

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

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
      <div>
        <ClassFilter
          handleClassChange={handleClassChange}
          selectedClass={selectedClass}
          classes={classes}
        />
      </div>
      <div className="miniature-list">
        {filteredMiniatures.map((miniature) => (
          <Miniature key={miniature.id} miniature={miniature} />
        ))}
      </div>
    </div>
  );
};
