import "./SectionBonus.css";
import LashMara from '../assets/imagens/fotobonus.jpg';
import ImageCarousel from "./ImageCarousel";

const SectionBonus = () => {
  return (
        <>
            <section className="bonus-text-section">
                <div className="section-bonus">
                <div className="image-container">
                    <img src={LashMara} alt="Lash Mara" />
                </div>
                <div className="text-container">
                    <p>
                    Com mais de 4 anos de experiência na área da beleza, Silmara é a mentora ideal para te ajudar a sair do nível básico e se tornar uma lash designer reconhecida. Ela ensinará a criar cílios de altíssima qualidade em apenas 1 hora, garantindo uma retenção de pelo menos 30 dias. No Método Lash Mara, você aprenderá não apenas a atingir esses resultados impressionantes, mas também a se posicionar no Instagram, explorar segredos de estratégias de marketing, saber o que postar para ser vista e reconhecida, além de descobrir o caminho que Silmara trilhou para sair do zero e se tornar a profissional de sucesso que é hoje
                    </p>
                </div>
                </div>
            </section>
        </>
  );
};

export default SectionBonus;
