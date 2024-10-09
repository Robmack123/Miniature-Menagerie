import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link className="navbar-link" to="/vault">
          The Vault
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/add">
          Add a Miniature
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="battle">
          Battle Tracker
        </Link>
      </li>
      {localStorage.getItem("mini_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("mini_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
