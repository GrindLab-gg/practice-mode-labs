import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";

const initialForm = { email: "", message: "", website: "" };

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) throw new Error(result.error || "We couldn’t send that message.");

      setForm(initialForm);
      setStatus("sent");
      setFeedback("Thanks—we’ll read this and get back to you.");
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "We couldn’t send that message. Please try again.");
    }
  };

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-field">
        <label htmlFor="contact-email">Your email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={updateField}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">What are you tracking by hand?</label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          maxLength="1800"
          placeholder="Tell us about the game, the community, and the workflow."
          value={form.message}
          onChange={updateField}
          required
        />
      </div>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={updateField} />
      </div>
      <div className="contact-form-footer">
        <button className="button button-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send your workflow"}
          {status !== "sending" && <ArrowRight size={16} aria-hidden="true" />}
        </button>
        <p className={`form-feedback ${status === "error" ? "is-error" : ""}`} aria-live="polite">{feedback}</p>
      </div>
    </form>
  );
}
