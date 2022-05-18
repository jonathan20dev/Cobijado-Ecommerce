import React from 'react'
import { Header } from "../shared/Header"
import { Footer } from "../shared/Footer"

const UserHistory = () => {
  return (
    <>
    <Header/>

    <div className="row">
          <div className="row mb-4">
            <div className="text-center mx-auto">
              <h2 className="text-dark" style={{marginLeft: '15px',paddingTop: '20px',}}>Historial de compra</h2>
              <p className="text-muted">Puedes ver todo tu registro de compras dentro de la aplicación</p>
            </div>
          </div>
        </div>

    <div className="container" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

        {/* Toda la seccion va a ir dentro de un map, pero de momento
        Van dos secciones quemadas para que se vea como sería el resultado */}

<section className="position-relative py-4 py-xl-5">
          <div className="container position-relative">
            <div className="row">
              <div className="col">
                <form className="bg-light border rounded-0 border-2 border-dark shadow-sm p-3 p-xl-4" method="post">
                <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <form className="p-3 p-xl-4">
                    <p style={{ color: "rgb(0,0,0)" }}><strong>OrdenID</strong><br/>NDAWLKDJNAWLKDJNA</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Estado</strong><br/>Procesada</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Fecha de compra</strong><br/>17/5/2022</p>
                    <p></p>
                  </form>
                </div>
                <div className="col-lg-6">
                  <form className="p-3 p-xl-4">
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Cliente</strong><br/>Jonathan M.</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Código Postal</strong><br/>1264</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Télefono</strong><br/>5013-5801</p>
                    <p></p>
                  </form>
                </div>
              </div>
                  <p className="text-center border rounded-0 shadow-sm" style={{color: 'rgb(0,0,0)'}}><strong>Productos</strong></p>
                  <p className="border rounded-0 border-0 shadow-sm" style={{color: 'rgb(0,0,0)'}}><strong>ID: </strong>hdgxbejtlxndbzt<br /><strong>Nombre:</strong>&nbsp;Camiseta<br /><strong>Cantidad:</strong>&nbsp;2<br /><strong>Marca:</strong>&nbsp;Nike<br /><strong>Talla:</strong>&nbsp;M<br /><strong>Total:</strong>&nbsp;4000<br /></p>
                  <p className="border rounded-0 border-0 shadow-sm" style={{color: 'rgb(0,0,0)'}}><strong>ID: </strong>nxbfjkdawnzbrds<br /><strong>Nombre:</strong>&nbsp;Pantalon<br /><strong>Cantidad:</strong>&nbsp;1<br /><strong>Marca:</strong>&nbsp;Puma<br /><strong>Talla:</strong>&nbsp;M<br /><strong>Total:</strong>&nbsp;4000<br /></p>
                  <p className="text-end" style={{color: 'rgb(0,0,0)'}}><strong>Total: 8000</strong></p>
                  <p style={{color: 'rgb(0,0,0)'}} />
                  <div className="mb-3" />
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="position-relative py-4 py-xl-5">
          <div className="container position-relative">
            <div className="row">
              <div className="col">
                <form className="bg-light border rounded-0 border-2 border-dark shadow-sm p-3 p-xl-4" method="post">
                <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <form className="p-3 p-xl-4">
                    <p style={{ color: "rgb(0,0,0)" }}><strong>OrdenID</strong><br/>NDAWLKDJNAWLKDJNA</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Estado</strong><br/>Procesada</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Fecha de compra</strong><br/>17/5/2022</p>
                    <p></p>
                  </form>
                </div>
                <div className="col-lg-6">
                  <form className="p-3 p-xl-4">
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Cliente</strong><br/>Jonathan M.</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Código Postal</strong><br/>1264</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Télefono</strong><br/>5013-5801</p>
                    <p></p>
                  </form>
                </div>
              </div>
                  <p className="text-center border rounded-0 shadow-sm" style={{color: 'rgb(0,0,0)'}}><strong>Productos</strong></p>
                  <p className="border rounded-0 border-0 shadow-sm" style={{color: 'rgb(0,0,0)'}}><strong>ID: </strong>hdgxbejtlxndbzt<br /><strong>Nombre:</strong>&nbsp;Camiseta<br /><strong>Cantidad:</strong>&nbsp;2<br /><strong>Marca:</strong>&nbsp;Nike<br /><strong>Talla:</strong>&nbsp;M<br /><strong>Total:</strong>&nbsp;4000<br /></p>
                  <p className="border rounded-0 border-0 shadow-sm" style={{color: 'rgb(0,0,0)'}}><strong>ID: </strong>nxbfjkdawnzbrds<br /><strong>Nombre:</strong>&nbsp;Pantalon<br /><strong>Cantidad:</strong>&nbsp;1<br /><strong>Marca:</strong>&nbsp;Puma<br /><strong>Talla:</strong>&nbsp;M<br /><strong>Total:</strong>&nbsp;4000<br /></p>
                  <p className="text-end" style={{color: 'rgb(0,0,0)'}}><strong>Total: 8000</strong></p>
                  <p style={{color: 'rgb(0,0,0)'}} />
                  <div className="mb-3" />
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
    <Footer/>
    </>
  )
}

export {UserHistory}