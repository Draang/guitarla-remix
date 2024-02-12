import Navegacion from "./navegacion";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor">
        <Navegacion />
        <p className="copyright">
          Todos los derechos reservador {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
