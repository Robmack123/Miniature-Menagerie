import { useNavigate } from "react-router-dom";
import "./banner.css";
export const Banner = () => {
  const navigate = useNavigate();

  const handleNavClick = () => {
    // Navigates to the home page when clicked
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
