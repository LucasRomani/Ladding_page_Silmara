import "./Article.css";
import Payment from './Payment';
import Section from './Section';
import sampleImage from "../assets/imagens/foto.jpg";

const Header = () => {
    return (
        <>
            <div className="section-initial">
            <section className="article-section ">
                <h3>FATURE 5 MIL REAIS TODOS OS MESES TRABALHANDO COMO LASH DESIGNER ATRAVÉS DO MÉTODO LASH MARA</h3>

                <p>
                Se você é LASH DESIGNER, já possui noções básicas da profissão, mas quer melhorar os seus resultados e dominar cada processo presente na sua rotina dentro do estúdio como extensionsita de cílios, o Método Lash Mara é para você!
                </p>
                <p>
                Ou se você quer iniciar na carreira de lash designer e começar a faturar 5 mil por mês, esse método também é para você! 
                </p>
                </section>
            </div>
                <Payment /> 
                <Section />

            <div className="section-intermediary">    
                <section className="article-section ">
                <h3>
                Com o Método Lash Mara você não aprende apenas a ser a melhor lash da sua região, você também aprende a se posicionar como a melhor e mostrar isso para as pessoas.
                </h3>
            </section>
            </div>
            
            <Payment />
            <div className="section-final"> 
            <div>
                <section className="article-section ">
                    <h1>PARA QUEM É?</h1>
                    <h4>O Método Lash Mara é para você lash designer que:</h4>
                    <p>• Tem dificuldade na preparação do fio natural</p>
                    <p>• Não sabe escolher os produtos certos </p>
                    <p>• Não consegue realizar o mapping correto para cada olho</p>
                    <p>• Não tem noções sobre visagismo</p>
                    <p>• Não sabe lidar com intercorrencias ou evitar que elas ocorram</p>
                    <p>• Tem dificuldade com sticks</p>
                    <p>• Demora mais de 1 hora para realizar o procedimento</p>
                    <p>• Não tem retenção dos cilios, ou duram menos de 30 dias </p>
                    <p>• Não sabe se posicionar no Instagram</p>
                    <p>• Não sabe o que postar nas redes sociais</p>
                    <p>• Tem poucas noções de gestão de estúdio para tratá-lo e fazê-lo crescer como um verdadeiro negócio...</p>
                </section>
                    <div className="image-container">
                        <img src={sampleImage} alt="Lash Designer" className="rounded-image" />
                    </div>
            </div>
            </div>
        </>
    )
}   
export default Header;