import { useLoaderData } from "@remix-run/react";
import { getPost } from "../models/posts.server";
import { formatDate } from "../../utils/helpers";
import styles from "../styles/blog.css";

export async function loader({ params }) {
  const { url } = params;
  const post = await getPost(url);

  if (post.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Blog no encontrado",
    });
  }
  return post;
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
      title: `GuitarLA - ${data[0].attributes.titulo}`,
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
export default function Post() {
  const post = useLoaderData();
  const { titulo, contenido, publishedAt, imagen, url } = post[0].attributes;
  return (
    <article className="post">
      <img
        src={imagen.data.attributes.formats.medium.url}
        alt={`imagen ${url}`}
        className="mt-3"
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatDate(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
}
