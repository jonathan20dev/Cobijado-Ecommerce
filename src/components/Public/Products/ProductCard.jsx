
function ProductCard({ nombre, descripcion, precio, img, id }) {
  return (
    <a className="ref-product" href={`/product/${id}`}>
      <img src={img} loading="lazy" className="ref-image" />
      <div className="ref-product-data">
        <div className="ref-product-info">
          <h5 className="ref-name">{nombre}</h5>
          <p className="ref-excerpt">{descripcion}</p>
        </div>
        <p className="ref-price">{precio}</p>
      </div>
    </a>
  );
}

export { ProductCard };
