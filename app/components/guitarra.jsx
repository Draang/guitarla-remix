import PropTypes from "prop-types"
import { Link } from "@remix-run/react";
export default function Guitarra({ guitarra }) {
  const {
    desc,
    imagen,
    nombre,
    precio,
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

Guitarra.propTypes = {
  guitarra: PropTypes.shape({
    createdAt: PropTypes.any,
    desc: PropTypes.any,
    imagen: PropTypes.shape({
      data: PropTypes.shape({
        attributes: PropTypes.shape({
          formats: PropTypes.shape({
            medium: PropTypes.shape({
              url: PropTypes.any
            })
          })
        })
      })
    }),
    nombre: PropTypes.any,
    precio: PropTypes.any,
    publishedAt: PropTypes.any,
    updatedAt: PropTypes.any,
    url: PropTypes.any
  })
}
