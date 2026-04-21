import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const siteUrl = "https://resume-seven-beige.vercel.app/";

export const metadata: Metadata = {
  title: "이주열 | Frontend Developer",
  description:
    "사용자 경험을 중심으로 웹 서비스를 구현하는 프론트엔드 개발자 이주열입니다.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "이주열 | Frontend Developer",
    description:
      "사용자 경험을 중심으로 웹 서비스를 구현하는 프론트엔드 개발자 이주열입니다.",
    url: siteUrl,
    siteName: "이주열 Portfolio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "이주열 | Frontend Developer",
    description:
      "사용자 경험을 중심으로 웹 서비스를 구현하는 프론트엔드 개발자 이주열입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
  (function() {
    try {
      if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={pretendard.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
