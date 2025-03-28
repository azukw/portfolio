import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <form className="contact-form " action="https://formsubmit.co/sami.ssaoud@gmail.com" method="POST">
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">Envoyez-moi un message</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">(Sami — Saoud)</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">&copy; 2025</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>CONTACTEZ-MOI</h3>

            <p>
            Vous avez une idée en tête ? Donnons-lui vie ! Pour un projet ou autre, contactez-moi.
            </p>
          </div>

          <div className="contact-form-availability">
          <p className="primary sm">Formulaire</p>
          <p className="primary sm">de</p>
          <p className="primary sm">Contact</p>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-item">
            <input type="text" placeholder="Nom" required />
          </div>

          <div className="form-item">
            <input type="text" placeholder="Email" required />
          </div>

          <div className="form-item">
            <textarea type="text" rows={6} placeholder="Message" required />
          </div>

          <div className="form-item">
            <button className="btn">Envoyer</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
