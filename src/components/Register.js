import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { registerAsync } from "../redux/actions/actionRegister";

function Register() {
  const dispatch = useDispatch();
  const [values, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { email, name, password1, password2 } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(registerAsync(email, password1, name));
    reset();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="mb-4"
        src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/logo-amazon.png"
        alt="logo"
      ></img>
      <div>
        <h1 className="text-3xl mb-4">Registrarse</h1>

        <form className="flex flex-col w-96" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              className="w-96"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block">Email</label>
            <input
              className="w-96"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block">Password</label>
            <input
              className="w-96"
              type="password"
              name="password1"
              placeholder="Password"
              value={password1}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block">Password</label>
            <input
              className="w-96"
              type="password"
              name="password2"
              placeholder="Password"
              value={password2}
              onChange={handleInputChange}
            />
          </div>
          <button className="login mt-4" type="submit">
            SingUp
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <button className="login-google text-white">
            <i className="fab fa-google"></i>
          </button>
          <button className="login-facebook text-white">
            <i className="fab fa-facebook-f"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
