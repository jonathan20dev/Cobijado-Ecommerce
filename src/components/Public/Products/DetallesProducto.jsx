import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCarrito } from "../../../negocio/context/CarritoContext";
import { useProducts } from "../../../negocio/context/ProductsContext";
import { Footer } from "../shared/Footer";
import { Header } from "../shared/Header";

function DetallesProducto() {
  const { productoActual } = useProducts();
  const { agregarAlCarro } = useCarrito();
  const { id } = useParams();
  let [cant, setCant] = useState(1);
  let [talla, setTalla] = useState();
  let producto = productoActual(id)

  if (producto === undefined) {
      producto = {
        img: '',
        nombre: '',
        precio: 0,
        descripcion: ''
      }
    }


  const handleCant = (accion) => {
    if (accion === "increase") {
      setCant((cant += 1));
    } else if (accion === "decrease") {
      if (cant !== 1) {
        setCant((cant -= 1));
      }
    }
  };

  const handleTalla = ({ target }) => {
    setTalla(target.value)
  };

  return (
    <div>
      <Header />
      <section className="py-5 mt-5">
        <div className="container py-5">
          <div
            data-reflow-type="product"
            data-bss-dynamic-product
            data-bss-dynamic-product-param="product"
            data-reflow-shoppingcart-url="shopping-cart.html"
          >
            <div className="reflow-product">
              <div className="ref-media">
                <div className="ref-preview" style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                  <img
                    className="ref-image active"
                    src={producto.img}
                    data-reflow-preview-type="image"
                    style={{width: 'auto'}}
                    alt="producto"
                  />
                </div>
              </div>
              <div className="ref-product-data">
                <h2 className="ref-name">{producto.nombre}</h2>
                <strong className="ref-price">{producto.precio}</strong>
                <span
                  data-reflow-type="add-to-cart"
                  data-reflow-shoppingcart-url="shopping-cart.html"
                  data-reflow-product="43218622"
                  data-reflow-variant="199976733_s"
                >
                  <div className="ref-product-controls">
                    <div className="ref-variant">
                      <label>
                        <span>Size</span>
                        <select
                          className="ref-form-control ref-field-variants"
                          name="variant-state"
                          required
                          onChange={handleTalla}
                        >
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                        </select>
                      </label>
                    </div>
                    <span
                      data-reflow-variant="199976733_s"
                      data-reflow-product="43218622"
                      data-reflow-max-qty="999"
                      data-reflow-quantity="1"
                    >
                      <div className="ref-quantity-widget">
                        <div
                          className="ref-decrease"
                          onClick={() => {
                            handleCant("decrease");
                          }}
                        >
                          <span></span>
                        </div>
                        <div type="text" style={{width: '35px', justifyContent: 'center', display: 'flex', alignContent: 'center'}}>{cant}</div>
                        <div
                          className="ref-increase"
                          onClick={() => {
                            handleCant("increase");
                          }}
                        >
                          <span></span>
                        </div>
                      </div>
                    </span>
                    <button className="ref-button" onClick={() => agregarAlCarro(producto, cant, talla)}>
                      Add to Cart
                    </button>
                  </div>
                </span>
                <div className="ref-description">{producto.descripcion}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


  


export { DetallesProducto };
