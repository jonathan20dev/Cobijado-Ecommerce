import React  from "react";
import { Footer } from "../shared/Footer";
import { Header } from "../shared/Header";
import { Products } from "./Products";
import { useProducts } from "../../../negocio/context/ProductsContext";
import { NavLink } from "react-router-dom";

function ProductsShop() {
  const products = useProducts();

  const handleChange = () => {
    //filter recibe como parametro la categoria
  };

  return (
    <div>
      <Header />
      <div style={{ margin: "25px" }}>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink style={{color: 'black'}}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              aria-current="page"
              to="/"
            >
              Todos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={{color: 'black'}}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              aria-current="page"
              to="/"
            >
              Mujeres
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={{color: 'black'}}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              aria-current="page"
              to="/"
            >
              Hombres
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={{color: 'black'}}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              aria-current="page"
              to="/"
            >
              Niños
            </NavLink>
          </li>
        </ul>
      </div>
      {<Products products={products.products} />}
      <Footer />
    </div>
  );
}

export { ProductsShop };
