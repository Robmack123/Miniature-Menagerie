import "./miniatures.css";

export const Miniature = ({ miniature }) => {
  return (
    <div className="miniature-container">
      <h1>{miniature.name}</h1>
      <div>
        <img src={miniature.img_url} alt={miniature.name} />
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
