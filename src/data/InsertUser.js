import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
//( ´･･)ﾉ(._.`)
const userCollection = collection(db, 'Usuarios');
const addNewUser = async (usuario) => {
  alert(usuario.correo + " " + usuario.id)
  await addDoc(userCollection, usuario);
};

export { addNewUser };