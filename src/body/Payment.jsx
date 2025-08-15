import "./Payment.css";

const Payment = () => {
    const handleLeadClick = () => {
        if (typeof fbq === "function") {
            fbq("track", "Lead");
        }
        console.log("Evento Lead enviado!");
    };

    return (
        <div className="pay">
            <a 
                href="https://pay.kiwify.com.br/xYhllZV" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="payment-button"
                onClick={handleLeadClick}
            >
                INSCREVA-SE, POR R$30,72 POR MÊS
            </a>
            <p className="data-protection">
                🔒 Seus dados estão protegidos. Utilizamos criptografia e não compartilhamos suas informações.
            </p>
        </div>
    );
};

export default Payment;
