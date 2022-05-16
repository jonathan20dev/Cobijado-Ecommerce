import React from "react";

function CartProduct() {
  return (
    <div
      className="ref-product"
      data-id="1233532930"
      data-quantity="1"
      data-variant_id="199976733_s"
    >
      <div className="ref-product-col">
        <div className="ref-product-wrapper">
          <img
            className="ref-product-photo"
            src="https://cdn.bootstrapstudio.io/products/product-2_sm.jpg"
            alt="Jany Little"
          />
          <div className="ref-product-data">
            <div className="ref-product-info">
              <div className="ref-product-name">Nombre producto</div>
              <div className="ref-product-category">Categoria: niños</div>
              <div className="ref-product-variants">
                <div className="ref-product-variant">Talla: S</div>
              </div>
              <div className="ref-product-personalization-holder"></div>
            </div>
            <div className="ref-product-price">$395.85</div>
          </div>
        </div>
        <div className="ref-product-controls">
          <div className="ref-product-quantity">
            <div
              className="ref-quantity-container"
              data-reflow-variant="199976733_s"
              data-reflow-product="1233532930"
              data-reflow-max-qty="999"
              data-reflow-quantity="1"
            >
              <div className="ref-quantity-widget">
                <div className="ref-decrease">
                  <span></span>
                </div>
                <input type="text" value="1" />
                <div className="ref-increase">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="ref-product-remove">Remover</div>
          </div>
          <div className="ref-product-total">
            <div className="ref-product-total-sum">$395.85</div>
          </div>
        </div>
      </div>
      <div className="ref-price-col">
        <div className="ref-product-price">$395.85</div>
      </div>
      <div className="ref-quantity-col">
        <div className="ref-product-quantity">
          <div
            className="ref-quantity-container"
            data-reflow-variant="199976733_s"
            data-reflow-product="1233532930"
            data-reflow-max-qty="999"
            data-reflow-quantity="1"
          >
            <div className="ref-quantity-widget">
              <div className="ref-decrease">
                <span></span>
              </div>
              <input type="text" value="1" />
              <div className="ref-increase">
                <span></span>
              </div>
            </div>
          </div>
          <div className="ref-product-qty-message"></div>
          <div className="ref-product-remove">Remover</div>
        </div>
      </div>
      <div className="ref-total-col">
        <div className="ref-product-total">
          <div className="ref-product-total-sum">$395.85</div>
        </div>
      </div>
    </div>
  );
}

export { CartProduct };
