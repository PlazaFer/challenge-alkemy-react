

export const Spinner = ({w, h}) => {
  return (
    <div className="text-center mt-3">
      <div
        className="spinner-border spinner-border-lg"
        style={{ width: `${w}`, height: `${h}` }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
