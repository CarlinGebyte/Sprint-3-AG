import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionLogin";
import "../styles/SecondHeader.css";

function SecHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate("/login");
  };
  return (
    <div className="header-2">
      <ul className="flex flex-wrap text-white ">
        <li>Todo</li>
        <li>Tarjetas de regalo</li>
        <li>Prime</li>
        <li>Los más vendidos</li>
        <li>AmazonBasics</li>
        <li>Cómputo y tabletas</li>
        <li className="hover:cursor-pointer" onClick={() => navigate("/add")}>
          Agregar productos
        </li>
        <li className="hover:cursor-pointer" onClick={handleLogout}>
          Cerrar Sesión
        </li>
      </ul>
    </div>
  );
}

export default SecHeader;
