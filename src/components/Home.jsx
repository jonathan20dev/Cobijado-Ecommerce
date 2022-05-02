import { useState } from "react";
import { Header } from "./shared/Header";
import { CarouselBanner } from "./CarouselBanner"
import { Novedades } from "./Novedades/Novedades"
import { ProductCard } from "./ProductCard/ProductCard"
import { Footer } from "./shared/Footer"

export function Home() {
  const [productosNovedad] = useState([
    {nombre: 'Producto 1'},
    {nombre: 'Producto 2'},
    {nombre: 'Producto 3'},
  ]);

  return (
    <div>
      <Header/>
      <CarouselBanner/>
      <Novedades>
        {productosNovedad.map(producto => <ProductCard key={producto.nombre} producto={producto}/>)}
      </Novedades>
      <Footer/>
    </div>
  );
}
