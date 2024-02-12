import { Link } from "@remix-run/react";
import Navegacion from "./navegacion";
import Logo from "../../public/img/logo.svg";
export default function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link className="logo" to="/">
          <img src={Logo} alt="GuitarsLA" className="logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
}
