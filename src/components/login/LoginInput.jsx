import { Field, useField, ErrorMessage } from "formik";


export const LoginInput = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <div className="col-12 mb-3">
      <label htmlFor={props.htlmFor || props.name} className="form-label">
        {props.label}
      </label>
      <Field {...props} {...field} className="form-control mb-1" />
      <ErrorMessage
        name={props.name}
        component="div"
        className="alert-danger mb-1 p-1 rounded"
      />
    </div>
  );
};
