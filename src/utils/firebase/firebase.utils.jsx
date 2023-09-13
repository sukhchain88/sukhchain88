import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/app'


const firebaseConfig = {
    apiKey: "AIzaSyCZym3FraLCbw2DTzdtDGd6xFZea9l9rXw",
    authDomain: "crown-clothing-db-26488.firebaseapp.com",
    projectId: "crown-clothing-db-26488",
    storageBucket: "crown-clothing-db-26488.appspot.com",
    messagingSenderId: "108823834995",
    appId: "1:108823834995:web:23002d7f7edb35b86fd506"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);