export const Button = ({name, ...rest}) => {

    return (
      <button
        {...rest}
        style={{ borderRadius: "15px" }}
        className="btn btn-primary me-3"
      >
        {name}
      </button>
    );
}