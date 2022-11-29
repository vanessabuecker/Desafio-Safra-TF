import {
    createUserWithEmailAndPassword,
    updateProfile,
  } from './exports.js';
  
  import { auth } from './config_firebase.js';

  export const register = (
    email,
    password,
    profileName,
  ) => createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      updateProfile(auth.currentUser, {
        displayName: profileName,
      });
    });
