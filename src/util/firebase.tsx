import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAOR1ljUjZNcSy5e_SJtYnWq9-uyojtsGs",
    authDomain: "ochivemind.firebaseapp.com",
    projectId: "ochivemind",
    storageBucket: "ochivemind.appspot.com",
    messagingSenderId: "451291695491",
    appId: "1:451291695491:web:fd66acadb2b8eff45d0eb6",
    measurementId: "G-R7C1Q4W1TG"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);