import { app } from './config_firebase.js';
import { getFirestore, getDocs, collection,
} from './firebase.js';

export const db = getFirestore(app);

export const banks = () => {
    return console.log(getDocs(collection(db, 'Bancos')));
}

export {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
  } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js';