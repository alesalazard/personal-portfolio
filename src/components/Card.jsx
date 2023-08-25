import "../styles/card.css";

export const Card = ({ name, description, link, img }) => {
  return (
    <>
      <div className="card">
        <a href={link} className="card-link" target="_blank">
          <img className="card-img-top" src={img} alt="Card image cap" />
        </a>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-body">
          <a href="#" className="card-link">
            Repositorio
          </a>
        </div>
      </div>
    </>
  );
};
