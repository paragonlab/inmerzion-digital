import { ImageResponse } from "next/og";

export const alt = "Lala Softfit — @lala.softfit";
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
          alignItems: "center",
          background: "linear-gradient(160deg, #f6efe6 0%, #ebe1d4 45%, #d7e0d4 100%)",
          color: "#3d4a3f",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 140,
            height: 140,
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(145deg, #e8c4b8 0%, #8fa88a 100%)",
            color: "#f6efe6",
            fontSize: 56,
            fontWeight: 700,
          }}
        >
          La
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          Lala Softfit
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 36,
            color: "#6f8a6c",
          }}
        >
          @lala.softfit
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "#8fa88a",
          }}
        >
          Inmerzion · Paragon Labs
        </div>
      </div>
    ),
    { ...size },
  );
}
