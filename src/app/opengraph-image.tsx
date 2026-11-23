import { ImageResponse } from "next/og";

export const alt = "UNA Colombia: conectar a Colombia con el mundo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#0a3a6b",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 38, opacity: 0.85 }}>UNA Colombia</div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: 18,
          }}
        >
          Conectar a Colombia con el mundo
        </div>
        <div style={{ display: "flex", marginTop: 44, width: 240, height: 10 }}>
          <div style={{ flex: 1, background: "#fbd200" }} />
          <div style={{ flex: 1, background: "#0057b8" }} />
          <div style={{ flex: 1, background: "#d62828" }} />
        </div>
      </div>
    ),
    size,
  );
}
