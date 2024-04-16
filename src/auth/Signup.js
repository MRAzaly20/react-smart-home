import React, {
  useState,
  useEffect
} from "react";
import {
  auth,
  db,
} from "./base";
//import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import {
  useNavigate
} from "react-router-dom";
import {
  ref,
  set
} from "firebase/database";

const SignUp = () => {
  const [firstName,
    setFirstName] = useState("");
  const [lastName,
    setLastName] = useState("");
  const [email,
    setEmail] = useState("");
  const [password,
    setPassword] = useState("");
  const navigate = useNavigate();
  const [user,
    setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  /*provider.setCustomParameters({
    prompt: 'select_account'
  });*/

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        set(ref(db, "users/" + userCredential.user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
      })
      .catch((error) => console.log(error));
      navigate("/");
    }
    onRegister();
  };
  const handleLoginWithGoogle = () => {
    try {
      signInWithPopup(auth, provider).then((res) => {
        alert(res.user)
        onAuthStateChanged(user => {
          setUser(user);
          alert(user.displayName);
        })
      });

      /*alert('Berhasil login dengan Google');*/
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form className="signupForm" onSubmit={handleSubmit}>
        <input
      placeholder="first name"
      onChange={(e) => setFirstName(e.target.value)}
      required
      ></input>
        <input
      placeholder="last name"
      onChange={(e) => setLastName(e.target.value)}
      required
      ></input>
        <input
      placeholder="email"
      onChange={(e) => setEmail(e.target.value)}
      required
      type="email"
      ></input>
        <input
      placeholder="password"
      onChange={(e) => setPassword(e.target.value)}
      required
      type="password"
      ></input>
        <button>Sign Up</button>
    </form>
     <button onClick={handleLoginWithGoogle}>Login dengan Google</button>
    </div>
  );
};

export default SignUp;