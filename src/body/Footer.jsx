import "./Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-info">
          <h4>Entre em contato</h4>
          <p>📍 Rua Santa Maria, 1181 - Francisco Beltrão - PR</p>
          <p>📞 (46) 98818-8282</p>
          <p>✉️ silmarasouza@outlook.com</p>
        </div>

        <div className="footer-social">
          <h4>Redes sociais</h4>
          <div className="icons">
            <a href="https://www.instagram.com/silmara.romani/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5546988188282" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mara Lash - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
