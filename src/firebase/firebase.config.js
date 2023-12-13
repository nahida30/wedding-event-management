// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration




const firebaseConfig = {
  apiKey: "AIzaSyA0uQbBHqSYn93lcAMEAqccVIy-RKcYmmM",
  authDomain: "wedding-event-management-9c904.firebaseapp.com",
  projectId: "wedding-event-management-9c904",
  storageBucket: "wedding-event-management-9c904.appspot.com",
  messagingSenderId: "858180108238",
  appId: "1:858180108238:web:a3d560994f358aa0d8759f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;