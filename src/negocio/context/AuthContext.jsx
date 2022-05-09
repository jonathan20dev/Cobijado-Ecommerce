import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../data/firebase";
import { insertUser } from '../../data/insertUser'

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userFb, setUserFb] = useState({correo: '', codigo_postal: 0, direccion: '', img: '', nombre: ''});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  const insertUserFB = () => {
    const obtenerUsuario = onAuthStateChanged(auth, (currentUser) => {
      const photo = currentUser.photoURL || " "
      const disName = currentUser.displayName || "Usuario"
      insertUser(currentUser.reloadUserInfo.localId, {...userFb, correo: currentUser.email, img: photo, nombre: disName})
      setUserFb({...userFb, correo: currentUser.email, img: photo, nombre: disName})
    })
    obtenerUsuario()
  }

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  //Compartidos
  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
        insertUserFB
      }}
    >
      {children}
    </authContext.Provider>
  );
}
