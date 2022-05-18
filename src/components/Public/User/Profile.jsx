import React from 'react'
import {Header} from "./../shared/Header"
import { Footer } from "./../shared/Footer"

const Profile = () => {
  const img = "https://tecdigital.tec.ac.cr/dotlrn/file-storage/view/dotlrn_fs_1066758_root_folder%2Fdesign%2FprofileAux.png"
  return (
    <>
    <Header/>
    <div className="container" >
      <div className="row">
        <div className="col-lg-4 offset-lg-0 text-center">
          <form
            className="border rounded-0 border-dark p-3 p-xl-4">
            <img
              className="rounded-circle border border-0 border-primary shadow"
              src={img}
              alt="imagen usuario"
              style={{ width: "216", height: "auto" }}
            />
            <p className="lead" style={{ marginTop: "10px" }}>
              Marco Serrano
            </p>
            <a
              className="btn btn-light border rounded-0 border-dark"
              href="/user-history"
            >
              Historial de Compra
            </a>
          </form>
        </div>
        <div className="col">
            <div className="container border rounded-0 border-dark position-relative" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="row">
                <div className="col">
                  <form className="p-3 p-xl-4" style={{ fontSize: "14" }}>
                    <p
                      className="fs-3"
                      style={{
                        color: "rgb(0,0,0)",
                        fontSize: "20",
                        fontFamily: '"Source Sans Pro", sans-serif',
                      }}
                    >
                      Mi cuenta
                      <br />
                    </p>
                    <p style={{ color: "rgb(0,0,0)" }}>
                      Actualiza y edita la información que compartes con la
                      comunidad
                      <br />
                    </p>
                    <p style={{ color: "rgb(0,0,0)" }}>
                      Email de inicio de sesión:
                      <br />
                      jonathan20.dev@gmail.com
                      <br />
                      <em>Tu email de inicio de sesión no se puede cambiar</em>
                      <br />
                    </p>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <form className="p-3 p-xl-4">
                    <p style={{ color: "rgb(0,0,0)" }}>Nombre</p>
                    <input
                      className="form-control"
                      type="text"
                      id="name-1"
                      name="name"
                      placeholder="Marco"
                      style={{ borderRadius: "5px" }}
                    />
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}>Teléfono</p>
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="5013-5801"
                      style={{ borderRadius: "5px" }}
                    />
                  </form>
                </div>
                <div className="col-lg-6">
                  <form className="p-3 p-xl-4">
                    <p style={{ color: "rgb(0,0,0)" }}>Apellidos</p>
                    <input
                      className="form-control"
                      type="text"
                      id="name-2"
                      name="name"
                      placeholder="Serrano"
                      style={{ borderRadius: "5px" }}
                    />
                    <p></p>
                    <p style={{ color: "rgb(0,0,0)" }}>Código postal</p>
                    <input
                      className="form-control"
                      type="number"
                      min="4"
                      placeholder="2611"
                      style={{ borderRadius: "5px" }}
                    />
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <form className="p-3 p-xl-4" method="post">
                    <p style={{ color: "rgb(0,0,0)" }}>Dirección</p>
                    <textarea
                      className="form-control"
                      style={{ borderRadius: "5px" }}
                    ></textarea>
                    <button
                      className="btn btn-dark border rounded-1 border-dark shadow-sm"
                      type="button"
                      style={{ marginTop: "20px" }}>
                      Actualizar información
                      <br />
                    </button>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export {Profile}