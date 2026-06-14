import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          color: "#111C2D",
          background:
            "radial-gradient(circle at 18% 18%, rgba(212, 175, 55, 0.24), transparent 280px), linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            marginBottom: "54px",
            color: "#D4AF37",
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              background: "#D4AF37",
            }}
          />
          Aeternum Webspace Studio
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: "82px", lineHeight: 0.95, fontWeight: 800, letterSpacing: "-0.06em" }}>
          <span>Website Profesional</span>
          <span>untuk Bisnis Modern</span>
        </div>
        <div style={{ marginTop: "34px", maxWidth: "760px", fontSize: "30px", lineHeight: 1.35, color: "#64748B" }}>
          Company profile, landing page, backend, dashboard internal, dan deployment siap online.
        </div>
        <div
          style={{
            display: "flex",
            gap: "18px",
            marginTop: "56px",
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          {['Next.js', 'Tailwind CSS', 'WhatsApp CTA', 'SEO Ready'].map((item) => (
            <span
              key={item}
              style={{
                border: "1px solid #E2E8F0",
                borderRadius: "999px",
                padding: "14px 22px",
                background: "rgba(255, 255, 255, 0.78)",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
