import '../styles/card.css'

export const Card = ({name, link}) => {
  return (
    <div>
      <div>
        <a href={link}><div className='card-main'>
          <h2>{name}</h2>
        </div></a>
      </div>
    </div>
  );
};
