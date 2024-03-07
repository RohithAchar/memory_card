const PictureCard = ({ data, clickHandler }) => {
  return (
    <div className="card" onClick={() => clickHandler(data.id)}>
      <img src={data.url} alt={data.cName} />
      <h2>{data.cName}</h2>
    </div>
  );
};

export default PictureCard;
