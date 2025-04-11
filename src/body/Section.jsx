import "./Section.css";

const Section = () => {
    return (
        <>
            <section className="feature-section">
                <div className="box-container">
                    <div className="feature-box">
                    <h3>💎 Aperfeiçoamento de suas habilidades:  </h3>
                    <p> No primeiro módulo você irá aprender tudo sobre extenção de cílios, sempre presando pela qualidade impecável e de forma profissional.</p>
                    </div>
                    <div className="feature-box">
                    <h3>📈 Se tornando uma lash de nível avançado:</h3>
                    <p>No segundo módulo você vai aprender como entregar cílios em 1h com durabilidade de 30 dias e como ter um atendimento que fideliza.</p>
                    </div>
                    <div className="feature-box">
                    <h3>📚 Como se tornar uma lash de sucesso: </h3>
                    <p>No terceiro módulo você vai aprender a como se posicionar nas redes sociais para atrair suas clientes.</p>
                    </div>
                </div>
            </section>
            
        </>
    )
}
export default Section;