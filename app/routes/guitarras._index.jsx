import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import ListadoGuitarras from "../components/listadoGuitarras";
import styles from "../styles/guitarras.css";
export function meta() {
  return [
    {
      title: "GuitarLA Tienda",
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
export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}
export default function Tienda() {
  const guitarras = useLoaderData();
  return (
    <main className="contenedor">
      <ListadoGuitarras guitarras={guitarras} />
    </main>
  );
}
