import { Link } from "react-router-dom";
import "./miniatures.css";
import { Oval } from "react-loader-spinner";
import { useState } from "react";

export const Miniature = ({ miniature, disableLink, customClass }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleImgLoad = () => {
    setLoading(false);
  };

  const handleImgError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div
      className={`miniature-container ${
        disableLink ? "no-hover" : ""
      } ${customClass}`}
    >
      <h1>{miniature.name}</h1>
      <div className="miniature-image-wrapper">
        {loading && (
          <div className="spinner-container">
            <Oval height={50} width={50} color="#8b4513" />
          </div>
        )}
        {error ? (
          <p>Image failed to load</p> // Display fallback text if image fails
        ) : disableLink ? (
          <img
            src={miniature.img_url}
            alt={miniature.name}
            onLoad={handleImgLoad}
            onError={handleImgError}
            style={{ display: loading ? "none" : "block" }}
          />
        ) : (
          <Link to={`/vault/${miniature.id}`}>
            <img
              src={miniature.img_url}
              alt={miniature.name}
              onLoad={handleImgLoad}
              onError={handleImgError}
              style={{ display: loading ? "none" : "block" }}
            />
          </Link>
        )}
      </div>
    </div>
  );
};
