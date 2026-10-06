"use client";

const WA_URL =
  "https://wa.me/5491125992801?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20el%20taller%20Pintando%20con%20Luz";

export default function WhatsAppFloat() {
  const handleClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Contact");
    }
  };

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      onClick={handleClick}
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        width: 62,
        height: 62,
        borderRadius: 999,
        background: "#25D366",
        color: "#06210f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        fontSize: 28,
        boxShadow: "0 16px 30px rgba(37,211,102,0.26)",
        zIndex: 999,
        transition: "0.2s ease",
      }}
    >
      💬
    </a>
  );
}
