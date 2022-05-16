import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../negocio/context/ProductsContext";
import { Footer } from "../shared/Footer";
import { Header } from "../shared/Header";

function DetallesProducto() {
  const { productoActual } = useProducts();
  const { id } = useParams();
  let [cant, setCant] = useState(1);
  const [producto, setProducto] = useState(productoActual(id));

  const handleChange = (accion) => {
    if (accion === "increase") {
      setCant((cant += 1));
    } else if (accion === "decrease") {
      if (cant !== 1) {
        setCant((cant -= 1));
      }
    }
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
                <div className="ref-preview">
                  <img
                    className="ref-image active"
                    src={producto.img}
                    data-reflow-preview-type="image"
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
                        >
                          <option value="199976733_s">S</option>
                          <option value="199976733_m">M</option>
                          <option value="199976733_l">L</option>
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
                            handleChange("decrease");
                          }}
                        >
                          <span></span>
                        </div>
                        <div type="text" style={{width: '35px', justifyContent: 'center', display: 'flex', alignContent: 'center'}}>{cant}</div>
                        <div
                          className="ref-increase"
                          onClick={() => {
                            handleChange("increase");
                          }}
                        >
                          <span></span>
                        </div>
                      </div>
                    </span>
                    <a className="ref-button" href="#">
                      Add to Cart
                    </a>
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
