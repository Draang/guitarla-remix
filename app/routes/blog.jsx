import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/posts.server";
import Post from "../components/post";
import styles from "../styles/blog.css";
export async function loader() {
  const posts = await getPosts();
  return posts.data;
}
export function meta() {
  return [
    {
      title: "Blog - GuitarLA",
      description: "Venta de guitarras y mucho mas",
    },
  ];
}
export function links() {
  return [
    { rel: "stylesheet", href: styles },
  ];
}
export default function Blog() {
  const posts = useLoaderData();
  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.length &&
          posts.map((post) => <Post key={post.id} post={post.attributes} />)}
      </div>
    </main>
  );
}
