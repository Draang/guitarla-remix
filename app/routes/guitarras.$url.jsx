import { useLoaderData, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { getGuitarra } from "../models/guitarras.server";
import styles from "../styles/guitarras.css";

export async function loader({ params }) {
  const { url } = params;
  const guitarra = await getGuitarra(url);

  if (guitarra.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return guitarra;
}
export function meta({ data }) {
  if (!data) {
    return [
      {
        title: `GuitarLA - ERROR `,
      },
    ];
  }
  return [
    {
      title: `GuitarLA - ${data[0].attributes.nombre}`,
      description: "GuitarLA Nuestra coleccion de guitarras",
    },
  ];
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
export default function Guitarra() {
  const [cantidad, setCantidad] = useState(0);
  const guitarra = useLoaderData();
  const { agregarCarrito } = useOutletContext();

  const { nombre, desc, precio, imagen } = guitarra[0].attributes;
  function handleSubmit(e) {
    e.preventDefault();
    if (cantidad >= 1) {
      const guitarraSeleccionada = {
        id: guitarra[0].id,
        imagen: imagen.data.attributes.url,
        cantidad,
        nombre,
        precio,
      };
      agregarCarrito(guitarraSeleccionada);
    } else {
      alert("Debes seleccionar una cantidad");
      return;
    }
  }
  return (
    <main className="contenedor guitarra">
      <img src={imagen.data.attributes.url} alt={nombre} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{desc}</p>
        <p className="precio">${precio}</p>

        <form className="formulario" onSubmit={handleSubmit}>
          <label htmlFor="cantidad">Cantidad:</label>

          <select
            name="cantidad"
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          >
            <option value="">--Seleccione-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </main>
  );
}
