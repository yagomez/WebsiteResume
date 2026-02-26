import type { Metadata } from "next";
import 'nes.css/css/nes.min.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Developer",
  description: "A retro 8-bit style portfolio showcasing ETL and full-stack development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            background-color: #FFD700;
            background-image: url('/WebsiteResume/images/retro-explorer.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center center;
            background-size: auto;
            font-family: 'MS Sans Serif', Arial, sans-serif;
            font-size: 11px;
          }
          /* Scrollbar styling */
          ::-webkit-scrollbar {
            width: 16px;
          }
          ::-webkit-scrollbar-track {
            background: #FFD700;
          }
          ::-webkit-scrollbar-thumb {
            background: #1084d7;
            border: 2px solid #dfdfdf;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #0860a8;
          }
        `}</style>
      </head>
      <body style={{ backgroundColor: '#FFD700', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
