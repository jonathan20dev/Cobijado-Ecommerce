import {React} from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Public/Auth/Login.jsx";
import { Register } from "./components/Public/Auth/Register";
import { Home } from "./components/Public/Home/Home";
import { ProtectedRoute } from "./components/Public/Security/ProtectedRoute";
import { AuthProvider } from "./negocio/context/AuthContext";
import { About } from "./components/Public/About us/About"
import { Contact } from "./components/Public/Contact/Contact"
import {Profile } from "./components/Public/User/Profile"

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>}/>
          <Route path="/about" element={<ProtectedRoute> <About /> </ProtectedRoute>}/>
          <Route path="/contact" element={<ProtectedRoute> <Contact /> </ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
