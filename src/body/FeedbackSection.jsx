import "./FeedbackSection.css";

const FeedbackSection = () => {
  return (
    <>
    <section className="feedback-section">
      <h2>Feedback das Nossas Alunas</h2>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/CnVH-lH6Ufg" 
          title="Feedback de Alunas"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
    </>
  );
};

export default FeedbackSection;
