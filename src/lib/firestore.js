import { app } from './config_firebase.js';
import {
  getFirestore, getDocs, collection,
} from './exports.js';

export const db = getFirestore(app);



export const banks = () => {
  return console.log(getDocs(collection(db, 'Bancos')));
}

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
