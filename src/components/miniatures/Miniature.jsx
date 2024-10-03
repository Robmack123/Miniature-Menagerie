import { Link } from "react-router-dom";
import "./miniatures.css";

export const Miniature = ({ miniature, disableLink }) => {
  return (
    <div className={`miniature-container ${disableLink ? "no-hover" : ""}`}>
      <h1>{miniature.name}</h1>
      <div>
        {disableLink ? (
          <img src={miniature.img_url} alt={miniature.name} />
        ) : (
          <Link to={`/vault/${miniature.id}`}>
            <img src={miniature.img_url} alt={miniature.name} />
          </Link>
        )}
      </div>
    </div>
  );
};
