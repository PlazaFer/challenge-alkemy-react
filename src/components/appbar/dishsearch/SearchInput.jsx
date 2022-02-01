import { Field, useField } from "formik";
import './searchInput.css';

export const SearchInput = ({ ...props }) => {
  
  const [field, meta] = useField(props);

  return (
    <>
      <div
        className={
          meta.touched && meta.error
            ? `col-12 container-form-error`
            : `col-12 container-form`
        }
      >
        <div className="form">
          <button type="submit" className="button">
            <i className="bi bi-search"></i>
          </button>
          <Field {...props} {...field} className="search-input" />
        </div>
      </div>
      </>
  );
};
