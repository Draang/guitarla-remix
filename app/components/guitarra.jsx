import { Link } from "@remix-run/react";
export default function Guitarra({ guitarra }) {
  const {
    createdAt,
    desc,
    imagen,
    nombre,
    precio,
    publishedAt,
    updatedAt,
    url,
  } = guitarra;
  const urlImg = imagen.data.attributes.formats.medium.url;
  return (
    <div className="guitarra">
      <img src={urlImg} alt={nombre} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{desc}</p>
        <p className="precio">${precio}</p>
        <Link className="enlace" to={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}
