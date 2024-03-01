export async function getCurso() {
  const req = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
  const res = await req.json();
  return res;
}
