import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export function meta() {
  return [
    {
      title: "Nosotros - GuitarLA",
      description: "Venta de guitarras y mucho mas",
    },
  ];
}
export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "preload", href: imagen, as: "image" },
  ];
}
export default function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Nosotros" />
        <div>
          <p>
            Proin convallis lectus non hendrerit accumsan. Cras tristique sit
            amet odio vestibulum euismod. Sed dignissim suscipit arcu eu
            dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed eget velit ligula. Fusce posuere, ligula in sodales hendrerit,
            metus sem tincidunt est, eget lacinia ante mi a augue. Etiam vitae
            nunc sem. Nunc a magna et quam sollicitudin vestibulum ac ut enim.
            Nullam non facilisis quam,
          </p>
          <p>
            Pellentesque id semper nunc. Aliquam sed odio elit. Vestibulum
            lectus justo, tincidunt non est mollis, facilisis congue felis.
            Nulla facilisi. Integer varius felis id sapien dignissim, sit amet
            posuere nisl dictum. Proin in metus molestie, vestibulum massa a,
            feugiat eros. Mauris at pulvinar tortor.
          </p>
        </div>
      </div>
    </main>
  );
}
