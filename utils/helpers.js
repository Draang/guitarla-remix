export function formatDate(date) {
  const nuevaFecha = new Date(date);
  const opciones = {
    year: "numeric",
    month: "long",
    day:'2-digit'
  };
  return nuevaFecha.toLocaleDateString("es-ES", opciones);
}
