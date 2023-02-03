import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-WPaoQwkEV_Ig9vACTKXOhICAE5Tjbi0",
  authDomain: "hazel-pillar-357712.firebaseapp.com",
  projectId: "hazel-pillar-357712",
  storageBucket: "hazel-pillar-357712.appspot.com",
  messagingSenderId: "705952396017",
  appId: "1:705952396017:web:853b73eb72d45f441b6f50",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
