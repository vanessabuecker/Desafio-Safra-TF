import { initializeApp, getAuth } from './firebase.js';

const firebaseConfig = {
  apiKey: "AIzaSyAvXCow4CVFH6xTN--nMyMRFSleIpbm6WA",
  authDomain: "desafio-safra-9dce0.firebaseapp.com",
  projectId: "desafio-safra-9dce0",
  storageBucket: "desafio-safra-9dce0.appspot.com",
  messagingSenderId: "182683468384",
  appId: "1:182683468384:web:95088ef87ebdbee7d5b905",
  measurementId: "G-123VBVW7KT"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

