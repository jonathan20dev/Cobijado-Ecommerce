import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';


const getUser = async (id, col) => {
    const coleccionC = collection(db, "Usuarios" || col);
    const coleccionSP = await getDocs(coleccionC);
    return coleccionSP.docs.map((element) => ({ ...element.data(),  id: element.id })).find(element => element.id === id)
};


export { getUser};