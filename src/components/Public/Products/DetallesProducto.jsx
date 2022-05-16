import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../shared/Footer";
import { Header } from "../shared/Header";

function DetallesProducto() {
  const { id } = useParams();
  let [cant, setCant] = useState(1);

  const handleChange = (accion) => {
    if (accion === 'increase') {
      setCant(cant+=1)
    } else if (accion === 'decrease') {
      if (cant !== 1) {
        setCant(cant-=1)
      }
    }
  }
  return (
    <div>
      <Header/>
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
                    src="https://cdn.bootstrapstudio.io/products/product-30_md.jpg"
                    data-reflow-preview-type="image"
                  />
                </div>
              </div>
              <div className="ref-product-data">
                <h2 className="ref-name">Chanchito</h2>
                <strong className="ref-price">$762.74</strong>
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
                        <div className="ref-decrease" onClick={() => {handleChange('decrease')}}>
                          <span></span>
                        </div>
                        <input type="text" value={cant} />
                        <div className="ref-increase" onClick={() => {handleChange('increase')}}>
                          <span></span>
                        </div>
                      </div>
                    </span>
                    <a className="ref-button" href="#">
                      Add to Cart
                    </a>
                  </div>
                </span>
                <div className="ref-description">
                  Hic quasi <b>quam</b> cupiditate <i>aut</i> non minus quae
                  necessitatibus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export { DetallesProducto };
