import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { appInit } from "../firebaseInit";


appInit();


// Authentication with email
const authWithMail = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      //   const errorCode = error.code;
      //   console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// Authentication with google
const authWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      //   const errorCode = error.code;
      //   console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
// Authentication with facebook
const authWithFacebook = () => {
  const auth = getAuth();
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      //   const errorCode = error.code;
      //   console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
// Authentication with github
const authWithGithub = () => {
  const auth = getAuth();
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      //   const errorCode = error.code;
      //   console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
export { authWithMail, authWithGoogle, authWithFacebook, authWithGithub };
