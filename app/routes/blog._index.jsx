import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/posts.server";
import ListadoBlogs from "../components/listadoBlogs";
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

export default function Blog() {
  const posts = useLoaderData();
  return (
      <ListadoBlogs posts={posts} />
  );
}