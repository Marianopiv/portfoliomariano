import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailIcon from "../../assets/email.png";
import "./contact.css";

const Contact = ({ i18n }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const targetEmail = "marianopividori93@gmail.com";
  const webhookUrl =
    "https://marianopividori.app.n8n.cloud/webhook/portfolio-contact";
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const subject = `Contacto portfolio - ${form.name || "Sin nombre"}`;
  const body = [
    `Nombre: ${form.name || "-"}`,
    `Email: ${form.email || "-"}`,
    "",
    form.message || "",
  ].join("\n");
  const mailtoHref = `mailto:${targetEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: "loading", message: "" });
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Error enviando el mensaje");
      }
      setForm({ name: "", email: "", message: "" });
      setStatus({
        state: "success",
        message:
          i18n.language === "es"
            ? "Mensaje enviado. Gracias!"
            : "Message sent. Thank you!",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          i18n.language === "es"
            ? "No se pudo enviar. Probá más tarde."
            : "Could not send. Please try later.",
      });
    }
  };

  const handleCopy = async () => {
    const content = [
      `Nombre: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      "",
      form.message || "",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      setCopied(false);
    }
  };

  const [copied, setCopied] = useState(false);

  return (
    <section className="section-block reveal bg-black text-white contact-shell">
      <div className="contact-grid">
        <div className="contact-copy">
          <h3 className="portfolioTitle">{t("contactame")}</h3>
          <p className="contact-subtitle">
            {i18n.language === "es"
              ? "Listo para sumar valor a tu equipo y convertir ideas en producto."
              : "Ready to add value to your team and turn ideas into product."}
          </p>
          <div className="contact-card">
            <div className="contact-icon">
              <img src={emailIcon} alt="" />
            </div>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <a className="contact-link" href={`mailto:${targetEmail}`}>
                {targetEmail}
              </a>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-field">
            <span className="contact-label">
              {i18n.language === "es" ? "Nombre completo" : "Full name"}
            </span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={i18n.language === "es" ? "Tu nombre" : "Your name"}
              type="text"
            />
          </label>
          <label className="contact-field">
            <span className="contact-label">Email</span>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@mail.com"
              type="email"
            />
          </label>
          <label className="contact-field">
            <span className="contact-label">
              {i18n.language === "es" ? "Mensaje" : "Message"}
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={
                i18n.language === "es"
                  ? "Contame sobre tu proyecto"
                  : "Tell me about your project"
              }
              rows={5}
            />
          </label>
          <div className="contact-actions">
            <button
              type="submit"
              className="btn-class contact-send"
              disabled={status.state === "loading"}
            >
              {status.state === "loading"
                ? i18n.language === "es"
                  ? "Enviando..."
                  : "Sending..."
                : i18n.language === "es"
                  ? "Enviar mensaje"
                  : "Send message"}
            </button>
            <button
              type="button"
              className="btn-class btnBlack contact-send contact-send--ghost"
              onClick={handleCopy}
            >
              {copied
                ? i18n.language === "es"
                  ? "Copiado"
                  : "Copied"
                : i18n.language === "es"
                  ? "Copiar mensaje"
                  : "Copy message"}
            </button>
          </div>
          {status.message && (
            <p
              className={`contact-status contact-status--${status.state}`}
              role="status"
            >
              {status.message}
            </p>
          )}
          {status.state === "error" && (
            <p className="contact-status contact-status--idle">
              {i18n.language === "es"
                ? "Si preferís, podés enviarlo desde tu mail:"
                : "If you prefer, you can send it from your email:"}{" "}
              <a className="contact-link" href={mailtoHref}>
                {targetEmail}
              </a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
