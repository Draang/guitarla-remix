/* eslint-disable react/no-unknown-property */
import PropTypes from "prop-types"
export default function Curso({ curso }) {
  const { contenido, imagen, titulo } = curso;
  return (
    <section className="curso">
      <style jsx="true">
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0, 0, 0, 0.65),
                rgb(0, 0, 0, 0.7)
              ),
              url(${imagen.data[0].attributes.url});
          }
        `}
      </style>
      <div className="contenedor curso-grid">
        <div className="contenido">
          <h2 className="heading"> {titulo}</h2>
          <p className="texto"> {contenido[0].children[0].text}</p>
        </div>
      </div>
    </section>
  );
}

Curso.propTypes = {
  curso: PropTypes.shape({
    contenido: PropTypes.any,
    imagen: PropTypes.shape({
      data: PropTypes.any
    }),
    titulo: PropTypes.any
  })
}
