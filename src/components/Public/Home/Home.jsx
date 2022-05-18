import { useState } from "react";
import { Header } from "../shared/Header";
import { CarouselBanner } from "./CarouselBanner"
import { Novedades } from "./Novedades/Novedades"
import { Footer } from "../shared/Footer"
import { Products } from "../Products/Products";

export function Home() {
  const [productosNovedad] = useState([
    {nombre: 'Producto 1', descripcion: 'descripcion', precio: '1234', img: 'https://img.freepik.com/psd-gratis/maqueta-caja-papel_35913-1372.jpg?w=2000', id:1},
    {nombre: 'Producto 2', descripcion: 'descripcion', precio: '1234', img: 'https://img.freepik.com/psd-gratis/maqueta-caja-papel_35913-1372.jpg?w=2000', id:2},
    {nombre: 'Producto 3', descripcion: 'descripcion', precio: '1234', img: 'https://img.freepik.com/psd-gratis/maqueta-caja-papel_35913-1372.jpg?w=2000', id:3},
  ]);

  return (
    <div>
      <Header/>
      <CarouselBanner/>
      <Novedades>
        <Products products={productosNovedad}/>
      </Novedades>
      <Footer/>
    </div>
  );
}
