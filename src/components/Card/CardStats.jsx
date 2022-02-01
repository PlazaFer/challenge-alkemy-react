
export const CardStats = ({ name, icon, stat }) => {
  return (
    <div className="col-6 d-flex ps-3">
      {name && <p className="fw-bold me-2">{name}</p>}
      {icon && <i className={`${icon} me-2`}></i>}
      <p>{stat}</p>
    </div>
  );
};