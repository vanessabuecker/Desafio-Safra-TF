import { initializeApp, getAuth } from './firebase.js';

const firebaseConfig = {
  apiKey: "AIzaSyAvXCow4CVFH6xTN--nMyMRFSleIpbm6WA",
  authDomain: "desafio-safra-9dce0.firebaseapp.com",
  projectId: "desafio-safra-9dce0",
  storageBucket: "desafio-safra-9dce0.appspot.com",
  messagingSenderId: "182683468384",
  appId: "1:182683468384:web:272e991e8f6235a6d5b905",
  measurementId: "G-55V69RYHX6"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

