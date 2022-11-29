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

export function login() {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    window.location.hash = "#home";
    const user = userCredential.user;
  });
}

export const logout = () => getAuth(app).signOut(auth);
