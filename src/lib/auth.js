import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "./exports.js";

import { auth, app } from "./config_firebase.js";

export const register = (email, password, name) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    () => {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
  );
};

export const login = async (email, password) => {
  const useCredential = await signInWithEmailAndPassword(auth, email, password);
  return useCredential.user;
};

export const logout = () => getAuth(app).signOut(auth);
