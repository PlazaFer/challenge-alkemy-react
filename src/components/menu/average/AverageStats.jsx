export const AverageStats = ({ name, icon, stat }) => {
  return (
    <div className="col-12 col-md-3 mb-2">
      <div className="col-12 text-center">{name}</div>
      <div className="col-12 text-center">
        <i className={`${icon} me-1`}></i>
        {stat}
      </div>
    </div>
  );
};
