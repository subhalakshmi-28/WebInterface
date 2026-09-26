import './HobbyCard.css';
function HobbyCard(props) {
  const {
    name,
    hobby,
    description,
    icon,
    details,
    accentColor,
  } = props;
  return (
    <div className="hobby-card" style={{ '--accent': accentColor }}>
      <div className="hobby-icon-wrapper">
        <span className="hobby-icon">{icon}</span>
      </div>
      <div className="hobby-card-body">
        <h2 className="hobby-title">{hobby}</h2>
        <p className="hobby-student">By {name}</p>
        <p className="hobby-description">{description}</p>
        <ul className="hobby-details">
          {details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default HobbyCard;