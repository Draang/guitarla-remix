import { useLoaderData } from "@remix-run/react";
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
  const guitarra = useLoaderData();
  const { nombre, desc, precio, url, imagen } = guitarra[0].attributes;
  return (
    <main className="contenedor guitarra">
      <img src={imagen.data.attributes.url} alt={nombre} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{desc}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  );
}
