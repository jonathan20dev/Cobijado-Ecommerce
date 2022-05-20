import React ,{ useState, useEffect } from 'react'
import { Header } from "../shared/Header"
import { Footer } from "../shared/Footer"
import { useAuth } from "../../../negocio/context/AuthContext"
import { getUser } from "../../../data/GetUser"
import { getFacturas } from '../../../data/getFacturas'

const UserHistory = () => {
  const [factura, setFactura] = useState([])
  const [usuario, setUsuario] = useState({nombre: "", telefono: "", codigo_postal: ""})
  const { user } = useAuth();
  

  const extractCollection = async() => {
    const uAux = await getUser(user.reloadUserInfo.localId)
    const fAux = await getFacturas(user.reloadUserInfo.localId)
    setUsuario(uAux)
    setFactura(fAux)
  }

  const productDetail = async(id) => {
    //const producto = await getProduct(id)
    //return producto
  }

  useEffect(() => {
    extractCollection()
  }, [])

  console.log(usuario, factura)
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
    {(factura.length > 0) ? factura.map(el => <section key={el.id} className="position-relative py-4 py-xl-5">
          <div className="container position-relative">
            <div className="row">
              <div className="col">
                <form className="bg-light border rounded-0 border-2 border-dark shadow-sm p-3 p-xl-4" method="post">
                <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <form className="p-3 p-xl-4">
                    <p style={{ color: "rgb(0,0,0)" }}><strong>OrdenID</strong><br/>{el.id}</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Estado</strong><br/>Procesada</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Fecha de compra</strong><br/>{el.fecha}</p>
                    <p></p>
                  </form>
                </div>
                <div className="col-lg-6">
                  <form className="p-3 p-xl-4">
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Cliente</strong><br/>{usuario.nombre}</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Código Postal</strong><br/>{usuario.codigo_postal}</p>
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}><strong>Télefono</strong><br/>{usuario.telefono}</p>
                    <p></p>
                  </form>
                </div>
              </div>
                  <p className="text-center border rounded-0 shadow-sm" style={{color: 'rgb(0,0,0)'}}><strong>Productos</strong></p>
                  
                  {el.productos.map(ele =>{
                    return <div> 
                        <p className="border rounded-0 border-0 shadow-sm" style={{color: 'rgb(0,0,0)'}}><strong>ID: </strong>{ele.id}<br /><strong>Nombre:</strong>&nbsp;{"Camiseta"}<br /><strong>Cantidad:</strong>&nbsp;{ele.cantidad}<br /><strong>Marca:</strong>&nbsp;{"Nike"}<br /><strong>Talla:</strong>&nbsp;{ele.talla}<br /><strong>Precio:</strong>&nbsp;{"4000"}<br /></p>
                      </div> 
                    })}
                  <p className="text-end" style={{color: 'rgb(0,0,0)'}}><strong>Total: {el.total}</strong></p>
                  <p style={{color: 'rgb(0,0,0)'}} />
                  <div className="mb-3" />
                </form>
              </div>
            </div>
          </div>
        </section>) : <p className="text-center mx-auto">Aun no tienes historial de compra</p>}
      
      </div>
    <Footer/>
    </>
  )
}

export {UserHistory}