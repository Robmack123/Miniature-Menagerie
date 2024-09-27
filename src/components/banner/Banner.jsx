import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();

  const handleNavClick = () => {
    navigate("/");
  };

  return (
    <header onClick={handleNavClick} style={{ cursor: "pointer" }}>
      <h1>Miniature Menagerie</h1>
    </header>
  );
};
