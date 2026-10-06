import ContactForm from "./components/ContactForm";
import WhatsAppFloat from "./components/WhatsAppFloat";

const WA_URL =
  "https://wa.me/5491125992801?text=Hola%2C%20quiero%20recibir%20informaci%C3%B3n%20sobre%20el%20taller%20Pintando%20con%20Luz";

const shadow = "0 10px 30px rgba(0,0,0,0.06)";
const shadowLg = "0 20px 50px rgba(0,0,0,0.10)";

export default function Page() {
  return (
    <div style={{ background: "#f4f0ec", color: "#1f1f1f" }}>

      {/* URGENCIA */}
      <div style={{
        background: "linear-gradient(90deg, #1f1f1f 0%, #2a2a2a 100%)",
        color: "#fff",
        textAlign: "center",
        padding: "11px 16px",
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: "0.02em",
      }}>
        <span style={{ color: "#ff8a00" }}>Cupos muy limitados</span> — Grupos de hasta 5 personas. Próximo grupo formándose.
      </div>

      {/* HERO */}
      <header style={{ padding: "72px 0 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: -180, left: "50%", transform: "translateX(-50%)",
          width: 640, height: 640, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,138,0,0.36) 0%, rgba(255,138,0,0.14) 42%, transparent 72%)",
          pointerEvents: "none",
        }} />

        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto 28px" }}>
          <img src="/logo.png" alt="Pintando con Luz" style={{ maxWidth: 280, display: "block", margin: "0 auto" }} />
        </div>

        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-block", background: "#fff", border: "1px solid #e5d8cc",
            borderRadius: 999, padding: "7px 18px", fontSize: 13, fontWeight: 700,
            color: "#e88b4a", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 20,
          }}>
            Taller de fotografía
          </div>

          <h1 style={{
            fontSize: "clamp(36px, 5.5vw, 64px)", lineHeight: 1.06, fontWeight: 800,
            letterSpacing: "-0.02em", margin: "0 0 22px",
          }}>
            Un espacio propio para{" "}
            <em style={{
              fontStyle: "normal",
              background: "linear-gradient(90deg, #ff8a00, #ff5a00)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              mirar, crear y encontrarse
            </em>
          </h1>

          <p style={{ fontSize: "clamp(17px, 2.2vw, 22px)", color: "#555", maxWidth: 640, margin: "0 auto 36px" }}>
            Un taller de fotografía para adultos y adolescentes con discapacidad intelectual. Un lugar artístico, accesible y sin fines terapéuticos, donde la imagen es el lenguaje.
          </p>

          <a href="#formulario" style={{
            display: "inline-block", padding: "18px 48px",
            background: "linear-gradient(135deg, #ff8a00, #ff5a00)",
            color: "#fff", fontSize: 18, fontWeight: 700, textDecoration: "none",
            borderRadius: 18, boxShadow: "0 16px 36px rgba(255,138,0,0.32)",
          }}>
            Consultar por el taller
          </a>
          <p style={{ marginTop: 14, fontSize: 13, color: "#888" }}>
            Completá el formulario — te respondemos a la brevedad
          </p>
        </div>
      </header>

      {/* QUÉ ES */}
      <section style={{ padding: "88px 0", background: "#fff", borderTop: "1px solid #e8e1da", borderBottom: "1px solid #e8e1da" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#e88b4a", marginBottom: 12 }}>
            ¿De qué se trata?
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1, margin: "0 0 18px", fontWeight: 800 }}>
            Un taller de fotografía<br />diferente a todo lo que conocés
          </h2>
          <p style={{ color: "#555", fontSize: 18, lineHeight: 1.75, margin: "0 0 16px" }}>
            Pintando con Luz es un taller creativo donde la fotografía funciona como herramienta de expresión, exploración personal y encuentro grupal. <strong>No es un espacio terapéutico.</strong> Es un espacio artístico, real y accesible.
          </p>
          <p style={{ color: "#555", fontSize: 18, lineHeight: 1.75, margin: 0 }}>
            Cada participante aprende a mirar, a encuadrar y a contar historias con imágenes. El grupo pequeño permite que cada persona tenga acompañamiento cercano y pueda ir a su propio ritmo.
          </p>

          {/* Galería */}
          <div style={{ marginTop: 52, display: "flex", gap: 24, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 12 }}>
            {["gaviota.jpg", "huellas.jpg", "mar_roca.jpg", "atardecer.jpg"].map((img) => (
              <img
                key={img}
                src={`/${img}`}
                alt="Fotografía del taller"
                style={{ minWidth: "76%", scrollSnapAlign: "center", aspectRatio: "4/3", objectFit: "cover", borderRadius: 20, boxShadow: shadow, display: "block" }}
              />
            ))}
          </div>

          {/* Info strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 52 }}>
            {[
              { label: "¿Cuándo?", value: "Una vez por semana", sub: "4 clases por mes" },
              { label: "¿Dónde?", value: "Palermo Soho", sub: "Buenos Aires" },
              { label: "Grupo", value: "Máximo 5 personas", sub: "Grupos mixtos" },
              { label: "Inversión", value: "$80.000/mes", sub: "4 clases incluidas" },
            ].map(({ label, value, sub }) => (
              <div key={label} style={{ background: "#f4f0ec", border: "1px solid #e5ded7", borderRadius: 20, padding: "24px 22px", boxShadow: shadow }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#e88b4a", marginBottom: 6 }}>{label}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#1f1f1f", lineHeight: 1.35 }}>
                  {value}<br />
                  <span style={{ fontWeight: 400, color: "#666", fontSize: 15 }}>{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section style={{ padding: "88px 0" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#e88b4a", marginBottom: 12 }}>
            Por qué Pintando con Luz
          </div>
          <h2 style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1, margin: "0 0 18px", fontWeight: 800 }}>
            Lo que hace especial<br />a este espacio
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }}>
            {[
              { icon: "📸", title: "Fotografía como lenguaje", text: "Cada participante explora su propia forma de mirar el mundo. No hay respuestas correctas, hay miradas únicas." },
              { icon: "🤝", title: "Grupo y comunidad", text: "Un entorno social y artístico donde crear junto a otros, compartir y ser parte de algo. Grupos de hasta 5 personas." },
              { icon: "✦", title: "Acceso real al arte", text: "Un taller pensado desde cero para ser accesible, cuidado y profesional. No una adaptación — un espacio creado para ellos." },
            ].map(({ icon, title, text }) => (
              <div key={title} style={{ borderRadius: 24, padding: "30px 26px", border: "1px solid #e5ded7", background: "#f4f0ec" }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontSize: 20, margin: "0 0 10px", fontWeight: 700 }}>{title}</h3>
                <p style={{ margin: 0, color: "#555", fontSize: 16, lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOTOS */}
      <div style={{ padding: "0 0 88px" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <img src="/perro.jpg" alt="" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 20, boxShadow: shadow, display: "block" }} />
            <img src="/sombras.jpg" alt="" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 20, boxShadow: shadow, display: "block" }} />
          </div>
        </div>
      </div>

      {/* BIO */}
      <section style={{ padding: "88px 0", background: "#fff", borderTop: "1px solid #e8e1da", borderBottom: "1px solid #e8e1da" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 56, alignItems: "center" }}>
            <img src="/foto-duena.jpeg" alt="Paloma Blanco Fernández" style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", borderRadius: 20, boxShadow: shadowLg, display: "block" }} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "#e88b4a", marginBottom: 12 }}>
                Quien dirige el taller
              </div>
              <h2 style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1, margin: "0 0 20px", fontWeight: 800 }}>
                Paloma Blanco Fernández
              </h2>
              <p style={{ color: "#555", fontSize: 18, lineHeight: 1.75, margin: "0 0 16px" }}>
                Actualmente estudia Terapia Ocupacional y lleva formándose en fotografía hace más de 10 años de manera independiente.
              </p>
              <p style={{ color: "#555", fontSize: 18, lineHeight: 1.75, margin: "0 0 16px" }}>
                Trabaja desde hace 4 años en un centro de equinoterapia, acompañando a niños y adolescentes con discapacidad.
              </p>
              <p style={{ color: "#555", fontSize: 18, lineHeight: 1.75, margin: "0 0 16px" }}>
                La fotografía y los caballos son, para ella, espacios de expresión, lenguaje y vínculo. Este proyecto nace del deseo de compartir la fotografía como una forma de comunicación y de encuentro, desde un enfoque sensible, humano y profesional.
              </p>
              <p style={{ color: "#555", fontSize: 18, lineHeight: 1.75, margin: 0 }}>
                Durante el año 2025 realizó y publicó un libro de fotografía, experiencia que fortaleció su interés por el trabajo artístico como proceso y forma de expresión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ background: "linear-gradient(135deg, #1f1f1f, #252525)", color: "#fff", padding: "56px 0", textAlign: "center" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1.1, margin: "0 0 40px", fontWeight: 800 }}>
            El taller en números
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              { num: "+10", label: "años de formación\nen fotografía" },
              { num: "4 años", label: "acompañando personas\ncon discapacidad" },
              { num: "≤5", label: "participantes por grupo\npara acompañamiento cercano" },
              { num: "1×", label: "clase por semana\nPalermo Soho, CABA" },
            ].map(({ num, label }) => (
              <div key={num}>
                <div style={{ fontSize: 38, fontWeight: 800, color: "#ff8a00", lineHeight: 1, marginBottom: 8 }}>{num}</div>
                <div style={{ fontSize: 15, color: "#ccc", lineHeight: 1.4, whiteSpace: "pre-line" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOTO EXTRA */}
      <div style={{ padding: "72px 0" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto" }}>
          <img src="/casita.jpg" alt="" style={{ width: "100%", borderRadius: 24, boxShadow: shadowLg, aspectRatio: "21/8", objectFit: "cover", display: "block" }} />
        </div>
      </div>

      {/* FORMULARIO */}
      <section id="formulario" style={{ padding: "96px 0", background: "#fff", borderTop: "1px solid #e8e1da" }}>
        <div style={{ width: "min(1100px, calc(100% - 48px))", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fff8f3", border: "1px solid #ffd4a8",
              borderRadius: 999, padding: "8px 18px", fontSize: 14, fontWeight: 600,
              color: "#b85c00", marginBottom: 20,
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff8a00", display: "inline-block" }} />
              Cupos limitados — Próximo grupo formándose
            </div>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.1, margin: "0 0 16px", fontWeight: 800 }}>
              ¿Querés sumarte al taller?
            </h2>
            <p style={{ color: "#666", fontSize: 18, maxWidth: 560, margin: "0 auto" }}>
              Dejanos tu nombre y teléfono y te contactamos para contarte todo.
            </p>
          </div>

          <div style={{
            background: "#f4f0ec", border: "1px solid #e0d8d2",
            borderRadius: 28, padding: "48px 52px",
            boxShadow: shadowLg, maxWidth: 800, margin: "0 auto",
          }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer style={{ padding: "28px 0 44px", textAlign: "center", color: "#888", fontSize: 14 }}>
        Pintando con Luz • Taller de Fotografía • Palermo Soho, Buenos Aires
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
