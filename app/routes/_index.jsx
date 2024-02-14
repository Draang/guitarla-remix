import { useLoaderData } from "react-router";
import { getGuitarras } from "../models/guitarras.server";
import { getPosts } from "../models/posts.server";
import { getCurso } from "../models/curso.server";
import ListadoGuitarras from "../components/listadoGuitarras";
import ListadoBlogs from "../components/listadoBlogs";
import Curso from "../components/curso";

import stylesGuitarras from "../styles/guitarras.css";
import styleBlog from "../styles/blog.css";
import stylesCurso from "../styles/curso.css"

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso(),
  ]);

  return { guitarras: guitarras.data, posts: posts.data, curso: curso.data };
}

export function meta() {
  return [
    {
      title: "GuitarrasLA",
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: stylesGuitarras,
    },
    {
      rel: "stylesheet",
      href: styleBlog,
    },{
      rel: "stylesheet",
      href: stylesCurso,
    }
  ];
}

export default function Index() {
  const { guitarras, posts, curso } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso curso={curso.attributes} />
      <section className="contenedor">
        <ListadoBlogs posts={posts} />
      </section>
    </>
  );
}
