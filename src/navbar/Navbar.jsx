import { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Importando ícones
import "./Navbar.css";
import logo from "../assets/imagens/logo.png"; // Substitua pelo caminho correto da sua logo

const Navbar = () => {


  return (
    <>
      {/* Cabeçalho fixo */}
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />

      </nav>
    </>
  );
};

export default Navbar;
