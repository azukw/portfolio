import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (isSubmitting) return;

    const form = event.target;
    const formData = new FormData(form);
    
    setIsSubmitting(true);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setMessageSent(true);

        form.reset();

        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      } else {
        throw new Error('Erreur lors de l\'envoi du formulaire');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      className="contact-form" 
      action="https://formsubmit.co/31344b0fa432d1113663ca1a05033da8" 
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">Envoyez-moi un message</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">(Formulaire de contact)</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">&copy; 2025</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>CONTACTEZ-MOI</h3>
            <p>Vous avez une idée en tête ? Donnons-lui vie ! Pour un projet ou autre, contactez-moi.</p>
          </div>
          <div className="contact-form-availability">
            <p className="primary sm">Sami</p>
            <p className="primary sm">Saoud</p>
          </div>
        </div>

        <div className="contact-form-col">
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value={false}/>
          <input type="hidden" name="_subject" value="Contact - Sami SAOUD" />
          <input type="hidden" name="_template" value="box" />

          <div className="form-item">
            <input type="text" placeholder="Nom" required name="Nom" autoComplete="name" />
          </div>

          <div className="form-item">
            <input type="email" placeholder="Email" required name="Email" autoComplete="email"/>
          </div>

          <div className="form-item">
            <textarea type="text" rows={6} placeholder="Message" required name="Message" autoComplete="off"/>
          </div>

          <div className="form-item">
            <button 
              type="submit" 
              className="btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </div>
        </div>
      </div>

      {messageSent && (
        <div className="confirmation-message">
          Message Envoyé !
        </div>
      )}
    </form>
  );
};

export default ContactForm;