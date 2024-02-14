import { Link } from "@remix-run/react";
import { formatDate } from "../../utils/helpers";

export default function Post({ post }) {
  const { titulo, contenido, url, imagen, publishedAt } = post;
  const urlImg = imagen.data.attributes.formats.small.url;
  return (
    <article className="post">
      <img src={urlImg} alt={`imagen ${url}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatDate(publishedAt)}</p>
        <p className="resumen">{contenido}</p>
        <Link className="enlace" to={`/blog/${url}`}>
          Leer Mas
        </Link>
      </div>
    </article>
  );
}
