import { Meta, Links, Outlet, Scripts, LiveReload } from "@remix-run/react";
import styles from "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";
export function meta() {
  return [
    /**
     * Para cargar meta de forma global;
     **/
    {
      charset: "utf-8",
      title: "GuitarLA - REMIX",
      viewport: "width=device-width,initial-scale=1",
    },
  ];
}
export function links() {
  return [
    /**
     * Para cargar hoja de estilos global
     **/
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
    },
  ];
}
export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
