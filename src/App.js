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
import { ProductsShop } from "./components/Public/Products/ProductsShop.jsx";
import { DetallesProducto } from "./components/Public/Products/DetallesProducto.jsx";
import { ProductsProvider } from "./negocio/context/ProductsContext.jsx";
import { Cart } from "./components/Public/Cart/CurrentCart.jsx";

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
          <Route path="/products" element={<ProtectedRoute> <ProductsProvider> <ProductsShop /> </ProductsProvider></ProtectedRoute>}/>
          <Route path="/product/:id" element={<ProtectedRoute> <ProductsProvider><DetallesProducto /></ProductsProvider> </ProtectedRoute>}/>
          <Route path="/shoppingCart" element={<ProtectedRoute> <Cart /></ProtectedRoute>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
