import { useContext } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { SearchInput } from "./SearchInput";
import { SearchContext } from "../../../context/searchContext/SearchContext";
import { searchDishSubmit } from "../../../services/searchDishSubmit";

export const DishSearch = () => {

  const { dispatch } = useContext(SearchContext);

  return (
    <Formik
      initialValues={{
        ingredient: "",
      }}
      validationSchema={Yup.object().shape({
        ingredient: Yup.string()
          .required("Required Field")
          .min(2, "Must be 2 characters or more"),
      })}
      onSubmit={(values) => {
        searchDishSubmit(values.ingredient, dispatch);
      }}
    >
      {({ handleSubmit }) => (
       
              <Form 
                onSubmit={handleSubmit}
                className="me-5"
              >
                  <SearchInput
                    name="ingredient"
                    type='text'
                    placeholder="Search dish..."
                  />
              </Form>
      )}
    </Formik>
  );
};


