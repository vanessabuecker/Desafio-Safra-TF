import {

  app,
  auth
} from './config_firebase.js';

import {

  getFirestore,
  getDocs,
  collection,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,

} from './exports.js';

export const db = getFirestore(app);

export const getBanksById = async (banksId) => {
  const docRef = doc(db, 'Bancos', banksId)
  const docSnap = await getDoc(docRef)
  return docSnap.data()
};

export const createDoc = (instituicao, tipo, saldo) => {
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


export const createCollectionDataUser = async (email, cpf, saldo) => {
  try {
    const docRef = await addDoc(collection(db, 'Dados'), {
      email,
      cpf,
      saldo,
    });
    return docRef.id;
  } catch (error) {
    return error;
  }
};

export const addClientToInstitution = async (clientId, bankId) => {
  const bankRef = doc(db, "Bancos", bankId);
  await updateDoc(bankRef, {
    cliente: arrayUnion(clientId)
  });
}