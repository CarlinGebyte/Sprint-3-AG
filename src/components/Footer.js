import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="bg-blue-2 footer">
      <ul className="flex text-white NavFooter">
        <li>
          <ul>
            <li className="font-bold">Conócenos</li>
            <li>Trabajar en amazon</li>
            <li>Información corporativa</li>
            <li>Departamento de prensa</li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="font-bold">Gana dinero con nosotros</li>
            <li>Vender en amazon</li>
            <li>Vender en amazon Handmade</li>
            <li>Publica tu libro en Kindle</li>
            <li>Programa de afiliados</li>
            <li>Anuncia tus productos</li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="font-bold">Podemos ayudarte</li>
            <li>Amazon y COVID-19</li>
            <li>Devolver o reemplazar productos</li>
            <li>Gestionar contenido y dispositivos</li>
            <li>Ayuda</li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="font-bold">Métodos de pago</li>
            <li>Tarjetas crédito y débito</li>
            <li>Tarjetas de regalo</li>
            <li>Meses sin intereses</li>
            <li>Amazon Cash</li>
            <li>Amazon Recargable</li>
          </ul>
        </li>
      </ul>
      <div className="logo-footer">
        <img
          className="m-auto pt-10 "
          src="https://raw.githubusercontent.com/CarlinGebyte/Sprint-3-AG/main/src/assets/img/logo-amazon.png"
          alt="logo"
        ></img>
      </div>
    </footer>
  );
}

export default Footer;
