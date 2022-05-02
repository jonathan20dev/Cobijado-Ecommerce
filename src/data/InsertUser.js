import { addDoc, collection } from 'firebase/firestore';
import { db } from '../datos/Firebase';
//( ´･･)ﾉ(._.`)
const userCollection = collection(db, 'Usuarios');
const addNewUser = async (id) => {
  await addDoc(userCollection, id);
};

export { addNewUser };