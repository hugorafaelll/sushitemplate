import React from "react";
import Logo from "../assets/image/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo do site" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/produtos">Cardapio</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
