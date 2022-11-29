import { app } from './config_firebase.js';
import {
  getFirestore, 
  getDocs, 
  collection, 
  addDoc,
} from './exports.js';

export const db = getFirestore(app);

export const createDoc= (instituicao, tipo, saldo) => { 
  return addDoc(collection(db, 'Bancos'), {
    instituicao,
    tipo,
    saldo,
  });
};

export const getAllBanks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'Bancos'));
    const bankGroup = [];
    querySnapshot.forEach((bancos) => {
      bankGroup.push({ ...bancos.data(), id: bancos.id });
    });
    return bankGroup;
  } catch (error) {
    return error;
  }
};

