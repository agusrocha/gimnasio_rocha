import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD90NKG_cBc8pMaADjpj5ymlENMZXXb68w",
    authDomain: "coderhouse-react-js.firebaseapp.com",
    projectId: "coderhouse-react-js",
    storageBucket: "coderhouse-react-js.appspot.com",
    messagingSenderId: "619115936029",
    appId: "1:619115936029:web:6d510db26f21d4271309f4"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);