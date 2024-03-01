import PropTypes from "prop-types"
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  isRouteErrorResponse,
  Link,
} from "@remix-run/react";
import styles from "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

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
  const carritoLS =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : null;

  const [carrito, setCarrito] = useState(carritoLS);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (guitarra) => {

    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoNuevo = carrito.map((guitarraState) =>
        guitarraState.id === guitarra.id ? guitarra : guitarraState
      );
      setCarrito(carritoNuevo);
    } else {
      setCarrito([...carrito, guitarra]);
    }

  };

  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarra.id === guitarraState.id) {
        guitarraState.cantidad = guitarra.cantidad;
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarGuitarra = (id) => {
    const carritoActualizado = carrito.filter((guitarra) => guitarra.id != id);
    setCarrito(carritoActualizado);
  };

  return (
    <Document>
      <Outlet
        context={{
          agregarCarrito,
          actualizarCantidad,
          eliminarGuitarra,
          carrito,
        }}
      />
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

Document.propTypes = {
  children: PropTypes.any
}

/** Menejo de errores **/
export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Document>
        <h1>Oops</h1>
        <p className="error">
          Status: {error.status} {error.statusText}
        </p>
        <Link to="/tienda" className="error-enlace">
          {"<- Volver a la tienda"}
        </Link>
      </Document>
    );
  }

  return (
    <Document>
      <h1>Uh oh ...</h1>
      <p className="error">Something went wrong.</p>
      <p className="error">{error.message}</p>
    </Document>
  );
}
