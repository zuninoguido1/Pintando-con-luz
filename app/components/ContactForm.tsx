"use client";

import { useState } from "react";

const WA_URL =
  "https://wa.me/5491125992801?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20el%20taller%20Pintando%20con%20Luz";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = {
      nombre: (form.elements.namedItem("nombre") as HTMLInputElement).value,
      telefono: (form.elements.namedItem("telefono") as HTMLInputElement).value,
      vinculo: (form.elements.namedItem("vinculo") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch("https://formspree.io/f/mzdorwgl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleWaClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact");
    }
  };

  if (success) {
    return (
      <div style={{ textAlign: "center", padding: "56px 24px" }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #ff8a00, #ff5a00)",
            color: "#fff",
            fontSize: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
            fontWeight: 700,
          }}
        >
          ✓
        </div>
        <h3 style={{ fontSize: 28, margin: "0 0 10px" }}>¡Consulta recibida!</h3>
        <p style={{ color: "#666", fontSize: 17, maxWidth: 480, margin: "0 auto 28px" }}>
          Te vamos a contactar a la brevedad para darte más información sobre el taller.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWaClick}
          style={{
            display: "inline-block",
            padding: "14px 32px",
            background: "#25D366",
            color: "#0f2a16",
            fontWeight: 700,
            borderRadius: 14,
            textDecoration: "none",
          }}
        >
          Escribir por WhatsApp
        </a>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1.5px solid #c8bfb8",
    padding: "8px 0 10px",
    fontSize: 16,
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#1f1f1f",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 13,
    fontWeight: 700,
    color: "#1f1f1f",
    marginBottom: 10,
    letterSpacing: "0.02em",
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 40px" }}>
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>
            Nombre y apellido <span style={{ color: "#e88b4a" }}>*</span>
          </label>
          <input
            name="nombre"
            required
            placeholder="Ej: Ana García"
            style={inputStyle}
          />
        </div>
        <div style={{ marginBottom: 32 }}>
          <label style={labelStyle}>
            Teléfono / WhatsApp <span style={{ color: "#e88b4a" }}>*</span>
          </label>
          <input
            name="telefono"
            type="tel"
            required
            placeholder="Ej: 11 2345-6789"
            style={inputStyle}
          />
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <label style={labelStyle}>¿Para quién es la consulta?</label>
        <select
          name="vinculo"
          style={{
            ...inputStyle,
            cursor: "pointer",
            appearance: "none",
            WebkitAppearance: "none",
          }}
          defaultValue=""
        >
          <option value="" disabled>
            Seleccioná una opción
          </option>
          <option>Para un familiar (hijo/a, hermano/a)</option>
          <option>Soy tutor/a legal</option>
          <option>Soy profesional (TO, psicólogo/a, docente)</option>
          <option>Para mí</option>
        </select>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "17px 44px",
            background: "linear-gradient(135deg, #ff8a00, #ff5a00)",
            color: "#fff",
            fontSize: 17,
            fontWeight: 700,
            fontFamily: "Arial, Helvetica, sans-serif",
            border: "none",
            borderRadius: 18,
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.6 : 1,
            boxShadow: "0 12px 28px rgba(255,138,0,0.28)",
          }}
        >
          {loading ? "Enviando..." : "Quiero más información"}
        </button>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWaClick}
          style={{ fontSize: 15, color: "#555", textDecoration: "none", display: "flex", gap: 6 }}
        >
          💬 O escribir por WhatsApp
        </a>
      </div>

      {error && (
        <p style={{ color: "#c0392b", fontSize: 14, marginTop: 12 }}>
          Hubo un problema al enviar. Por favor escribinos por WhatsApp.
        </p>
      )}

      <p style={{ marginTop: 16, fontSize: 12, color: "#aaa" }}>
        Tus datos se usan solo para contactarte sobre el taller.
      </p>
    </form>
  );
}
