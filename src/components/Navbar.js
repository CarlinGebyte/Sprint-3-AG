import React from "react";
import "../styles/Header.css"

function Navbar() {
  return (
    <div className="bg-blue-1 text-white">
      <nav className="flex header">
        <ul className="flex">
          <li className="flex-auto logoH-container">
            <a href="/">
              <img
                src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/logo-amazon.png"
                alt="logo"
              ></img>
            </a>
          </li>
          <li className="flex-auto locationH-container">
            <div>
              <p>Hola</p>
              <p>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Elije tu ubicación
              </p>
            </div>
          </li>
          <li className="flex-auto searchHcontainer">
            <div className="flex searchProduct">
              <select className="categoryH text-black" defaultValue="">
                <option value="categoria" >
                  categoría
                </option>
              </select>
              <form className="flex">
                <input
                  className="inputProduct"
                  type="text"
                  placeholder="Ingresa el nombre del producto"
                  required
                />
                <button className="buttonSearch text-black">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </li>
          <li className="flex-auto userHcontainer">
            <div>
              <p>Hola Identifícate</p>
              <select className="text-black" defaultValue="">
                <option value="mi cuenta" >
                  Mi cuenta
                </option>
                <option value="lista de deseos">Mi lista de deseos</option>
                <option value="pedidos">Mis pedidos</option>
                <option value="ayuda">Ayuda</option>
              </select>
            </div>
          </li>
          <li className="flex-auto pedidosHcontainer">
            <div>
              <p>Devoluciones y pedidos</p>
              <select className="text-black" defaultValue="">
                <option value="devoluciones" >
                  Devoluciones
                </option>
                <option value="mis pedidos">Mis pedidos</option>
                <option value="ayuda">Ayuda</option>
              </select>
            </div>
          </li>
          <li className="flex-auto cartHcontainer">
            <p>
              <i className="fas fa-shopping-cart"></i>
              Carrito
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
