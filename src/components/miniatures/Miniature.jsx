import { Link } from "react-router-dom";
import "./miniatures.css";
// html to display miniature
export const Miniature = ({ miniature, disableLink }) => {
  return (
    <div className="miniature-container">
      <h1>{miniature.name}</h1>
      <div>
        {disableLink ? ( // doesn't allow the user to click on the photo if the miniature if on the details page
          <img src={miniature.img_url} alt={miniature.name} />
        ) : (
          // takes users to form to edit the currently selected miniature
          <Link to={`/vault/${miniature.id}`}>
            <img src={miniature.img_url} alt={miniature.name} />
          </Link>
        )}
      </div>
    </div>
  );
};
