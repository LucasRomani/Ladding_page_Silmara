import "./LocationSection.css";
import Payment from "./Payment";

const LocationSection = () => {
  return (
    <section className="location-section">
      <h2>Onde Estamos</h2>
      <p>Venha nos visitar e conheça nosso espaço exclusivo para Lash Designers!</p>
      <div className="map-container">
        <iframe
          title="Localização"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14146.269872503396!2d-53.059005!3d-26.0657152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f072b860b4654b%3A0x24dce9284f158ae4!2sR.%20Santa%20Maria%2C%201181%20-%20Guanabara%2C%20Francisco%20Beltr%C3%A3o%20-%20PR%2C%2085604-000%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Payment />
    </section>
  );
};

export default LocationSection;
