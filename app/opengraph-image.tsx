import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "이주열 | Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#fdfcf8",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: "60px",
            height: "4px",
            backgroundColor: "#222",
            marginBottom: "40px",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#222",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          이주열
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: "32px",
            color: "#666",
            marginBottom: "40px",
          }}
        >
          Frontend Developer
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#999",
            marginBottom: "32px",
          }}
        />

        {/* Description */}
        <div
          style={{
            fontSize: "24px",
            color: "#888",
            lineHeight: 1.5,
          }}
        >
          사용자 경험을 중심으로 웹 서비스를 구현하는 프론트엔드 개발자
        </div>

        {/* Contact */}
        <div
          style={{
            fontSize: "18px",
            color: "#bbb",
            marginTop: "auto",
            display: "flex",
            gap: "24px",
          }}
        >
          <span>dhy2458@gmail.com</span>
          <span>·</span>
          <span>github.com/Melonisjy</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
