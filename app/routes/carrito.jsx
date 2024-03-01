import { useOutletContext } from "@remix-run/react";

import { ClientOnly } from "remix-utils/client-only";
import styles from "../styles/carrito.css";
import { useState, useEffect } from "react";
export function meta() {
  return [
    { title: "GuitarLA - Carrito", description: "Carrito de compras GuitarLA" },
  ];
}
export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
export default function Carrito() {
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tmpTotal = carrito.reduce(
      (total, guitarra) => total + guitarra.cantidad * guitarra.precio,
      0
    );
    setTotal(tmpTotal);
  }, [carrito]);

  const handleCantidad = (e, guitarra) => {
    actualizarCantidad({ id: guitarra.id, cantidad: parseInt(e.target.value) });
  };

  return (
    <ClientOnly fallback={"cargando..."}>
      {() => (
        <main className="contenedor">
          <h1 className="heading">Carrito de compras</h1>
          <div className="contenido">
            <div className="carrito">
              <h2>Articulos</h2>
              {carrito?.length === 0
                ? "Carrito Vacio"
                : carrito?.map((guitarra) => (
                    <div key={guitarra.id} className="producto">
                      <div>
                        <img src={guitarra.imagen} alt={guitarra.nombre} />
                      </div>
                      <div>
                        <p className="nombre">{guitarra.nombre}</p>

                        <div className="cantidad">
                          <p>Cantidad:</p>
                          <select
                            value={guitarra.cantidad}
                            className="select"
                            onChange={(e) => {
                              handleCantidad(e, guitarra);
                            }}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                        <p className="precio">
                          $<span>{guitarra.precio}</span>
                        </p>
                        <p className="subtotal">
                          Subtotal $
                          <span>{guitarra.precio * guitarra.cantidad}</span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn_eliminar"
                        onClick={() => eliminarGuitarra(guitarra.id)}
                      >
                        X
                      </button>
                    </div>
                  ))}
            </div>
            <aside className="resumen">
              <h3>Resumen de compra:</h3>
              <p>
                Total a pagar: <span>${total}</span>
              </p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  );
}
