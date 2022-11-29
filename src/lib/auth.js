import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from './exports.js';
import { auth } from './config_firebase.js';
import { app } from './config_firebase.js';

export function register(name, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.hash = "#home"
      const user = userCredential.user;
    })
}

export function login(){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    window.location.hash = "#home"
    const user = userCredential.user;
  });
}

export const logout = () => getAuth(app).signOut(auth);

