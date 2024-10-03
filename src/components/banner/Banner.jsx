import { useNavigate } from "react-router-dom";
import "./banner.css";
export const Banner = () => {
  const navigate = useNavigate();

  const handleNavClick = () => {
    navigate("/");
  };

  return (
    <header
      className="header"
      onClick={handleNavClick}
      style={{ cursor: "pointer" }}
    >
      <h1>Miniature Menagerie</h1>
    </header>
  );
};
