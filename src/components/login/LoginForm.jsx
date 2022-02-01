import { useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { LoginTitle, LoginImage, LoginButton, LoginInput } from ".";
import { AuthContext } from "../../context/authContext/AuthContext";
import { loginFormSubmit } from '../../services/loginFormSubmit';
import { errorMessage } from "./errorMessage";


export const LoginForm = () => {
  const { authState, dispatch } = useContext(AuthContext);


  useEffect(() => {

    authState.error && errorMessage(authState.error);

  }, [authState.error])


  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("Required Field").email("Invalid Email"),
        password: Yup.string().required("Required Field"),
      })}
      onSubmit={(values) => {
        loginFormSubmit(values, dispatch);
      }}
    >
      {({ handleSubmit }) => (
        <div className="container vh-100">
          <div className="row d-flex justify-content-center align-items-center w-100 h-100">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <div className="card py-3 px-4 shadow">
                <div className="card-body">
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 p-3 mb-3 text-center">
                        <LoginImage />
                        <LoginTitle />
                      </div>
                    </div>
                    <LoginInput
                      name="email"
                      type="email"
                      placeholder="fernando@gmail.com"
                      label="Email"
                    />
                    <LoginInput
                      name="password"
                      type="password"
                      placeholder="*****"
                      label="Password"
                    />
                    <LoginButton loading={authState.loading} />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
