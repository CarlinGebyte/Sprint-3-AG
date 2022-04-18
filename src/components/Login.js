import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import {
  loginEmailPassAsync,
  loginFacebook,
  loginGoogle,
} from "../redux/actions/actionLogin";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("debe ser de tipo email ana@gmail.com")
    .min(5, "email muy corto")
    .max(50, "excede el máximo")
    .required("El email es obligatorio"),
  password: Yup.string()
    .min(5, "Mínimo 5 caracteres")
    .max(20, "Máximo 20 caracteres")
    .required("Password is required"),
});

function Login() {
  const dispatch = useDispatch();

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="mb-4"
        src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/logo-amazon.png"
        alt="logo"
      ></img>
      <div>
        <h1 className="text-3xl mb-4">Iniciar Sesión</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            dispatch(loginEmailPassAsync(values.email, values.password));
          }}
        >
          {({ errors, touched, handleReset }) => (
            <Form className="flex flex-col w-96">
              <div className="mb-4">
                <label className="block">Email</label>
                <Field
                  className="w-96"
                  name="email"
                  type="email"
                  placeholder="Email"
                />{" "}
                {errors.email && touched.email ? (
                  <div className="text-red-500">{errors.email}</div>
                ) : null}
              </div>
              <div>
                <label className="block">Password</label>
                <Field
                  className="w-96"
                  name="password"
                  type="password"
                  placeholder="Password"
                />{" "}
                {errors.password && touched.password ? (
                  <div className="text-red-500">{errors.password}</div>
                ) : null}
              </div>
              <button className="login mt-4" type="submit">
                Login
              </button>
              <button
              type="button"
                className="login-facebook text-white"
                onClick={handleReset}
              >
                <i className="fas fa-trash"></i>
              </button>
              <Link to="/signup">¿Eres nuevo en Amazonas?</Link>
            </Form>
          )}
        </Formik>
        <div className="flex justify-between mt-4">
          <button className="login-google text-white" onClick={handleGoogle}>
            <i className="fab fa-google"></i>
          </button>
          <button
            className="login-facebook text-white"
            onClick={handleFacebook}
          >
            <i className="fab fa-facebook-f"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
