import { ImageResponse } from "next/og";

export const alt = "Inmerzion · Experiencias digitales inmersivas";
export const size = { width: 1200, height: 630 };
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
          padding: "72px 80px",
          background:
            "linear-gradient(165deg, #071016 0%, #0b161d 45%, #0a141a 100%)",
          color: "#f4f7f8",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -40,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: "rgba(62, 207, 176, 0.18)",
            filter: "blur(8px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -20,
            width: 380,
            height: 380,
            borderRadius: 999,
            background: "rgba(232, 220, 200, 0.08)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#3ecfb0",
            marginBottom: 28,
          }}
        >
          Paragon Labs · México
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: -3,
            lineHeight: 0.95,
            color: "#f4f7f8",
          }}
        >
          Inmerzion
        </div>
        <div
          style={{
            marginTop: 28,
            maxWidth: 720,
            fontSize: 32,
            lineHeight: 1.35,
            color: "#c5d5dc",
          }}
        >
          Experiencias digitales inmersivas — AR, 3D, video, animación e IA
        </div>
        <div
          style={{
            marginTop: 48,
            height: 3,
            width: 160,
            background: "#3ecfb0",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
