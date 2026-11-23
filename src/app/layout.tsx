import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const lora = Lora({ variable: "--font-lora", subsets: ["latin"] });
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "UNA Colombia | Conectar a Colombia con el mundo",
    template: "%s | UNA Colombia",
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: site.name,
    title: "UNA Colombia | Conectar a Colombia con el mundo",
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  // Mientras haya contenido por validar, el sitio no se indexa.
  robots: site.showDraftNotes
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-CO"
      className={`${lora.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-5 focus:py-3 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
