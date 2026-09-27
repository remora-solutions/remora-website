import "./globals.css";
import { Space_Grotesk, Manrope } from "next/font/google";
import { LanguageProvider } from "../lib/LanguageContext";
import RevealObserver from "../components/RevealObserver";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Remora | The backbone for ERP, automation, voice AI and RAG",
  description:
    "Remora connects ERP, automation, voice AI and RAG into one backbone that runs quietly behind your business.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <LanguageProvider>
          {children}
          <RevealObserver />
        </LanguageProvider>
      </body>
    </html>
  );
}
