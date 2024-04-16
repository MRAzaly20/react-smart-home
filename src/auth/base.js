import {
  initializeApp
} from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import {
  getDatabase
} from "firebase/database";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyACbCILOXlXEXm5r8-vQWRM3sELB_Tlq30",
  authDomain: "azalyiot.firebaseapp.com",
  databaseURL: "https://azalyiot-default-rtdb.firebaseio.com",
  projectId: "azalyiot",
  storageBucket: "azalyiot.appspot.com",
  messagingSenderId: "895705396570",
  appId: "1:895705396570:web:10779aaf645c2c27bd2f63",
  measurementId: "G-Z9T83RCXPS"

};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const db = getDatabase(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => signInWithPopup(provider).then((res) => {
  alert(res.user)
}).catch((error) => {
  alert(error.message)
});

export default app;