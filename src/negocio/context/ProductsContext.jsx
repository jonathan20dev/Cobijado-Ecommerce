import React, {createContext, useState, useEffect, useContext} from 'react'
import { getCollection } from "../../data/getCollection"

const ProductsContext = createContext();

const useProducts = () => {
    const context = useContext(ProductsContext);
    return context;
  };

function ProductsProvider({children}) {
    const [products, setProducts] = useState([]);

  const obtenerProductos = async () => {
    const products = await getCollection("Productos");
    setProducts(products);
  };

  useEffect(() => {
    obtenerProductos();
  }, [products]); 
  return (
    <ProductsContext.Provider value={{products}}>
        {children}
    </ProductsContext.Provider>
  )
}

export {ProductsProvider, useProducts}