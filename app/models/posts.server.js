export async function getPosts() {
  const req = await fetch(`${process.env.API_URL}/blog?populate=imagen`);
  const res = await req.json();
  return res;
}
export async function getPost(url) {
  const req = await fetch(
    `${process.env.API_URL}/blog?filters[url]=${url}&populate=imagen`
  );
  const res = await req.json();
  return res.data;
}
