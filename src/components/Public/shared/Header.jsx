import React, { useState } from "react";
import { NavDropdown } from 'react-bootstrap'
import { useAuth } from "../../../negocio/context/AuthContext";
import './header.css'

const styles = {
    container: {
        backgroundColor: "#fff",
        padding: "0px",
        margin: "0",
        overFlow: "hidden",
        textAlign: "center",
        boxShadow: "0 0 3px #000",
    },
    titulo:{
        paddingTop: "15px",
        fontWeight: "normal",
        fontSize: "59px",
        lineHeight: "normal",
        letterSpacing: "0.2em"
    },
    navBar:{
        display: 'flex'
    },
    navBar1:{
        display: 'none'
    }
};

function Header() {
    const [open, setOpen] = useState('flex')
    const { logout, user } = useAuth();

    const handleLogout = async () => {
        try {
        await logout();
        } catch (error) {
        console.error(error.message);
        }
    };

  return (
    <div style={styles.container}>
        <div style={styles.titulo}>
            <h1 style={styles.titulo}>Cobijado</h1>
        </div>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <header className="header">
                    <a href="#" className="toggle-button" onClick={() => { if (open === 'none') {
                        setOpen('flex')
                    } else {
                        setOpen('none')
                    }
                        }}>
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </a>
                    <nav className='navBar' style={{display: open}}>
                        <a  href="#">Home</a>
                        <a  href="#">Products</a>
                        <a  href="#">About</a>
                        <a  href="#">Admin</a>
                    </nav>
            </header>
        
            <div style={{display: 'flex' ,position: 'absolute' ,right: '20px', top: '154px'}}>

                <NavDropdown title={user.displayName || "Usuario"} id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Mi perfil</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Mis pedidos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  onClick={handleLogout}>Salir</NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    </div>
  );
}

export { Header };
