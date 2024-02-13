export async function getGuitarras() {
  const req = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const res = await req.json();
  return res;
}
export async function getGuitarra(url) {
  const req = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );
  const res = await req.json();
  return res.data;
}
