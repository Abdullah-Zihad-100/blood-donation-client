import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {auth} from "../Firebase/firebase.config.js"
export const AuthContaxt = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const googleProvider= new GoogleAuthProvider();
  useEffect(() => {
    const unSubcsribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User ------->", currentUser);
      setLoading(true);
    });

    return () => {
      unSubcsribe();
    };
  }, []);



  // google login -------->

  const gooleLogin =()=>{
    setLoading(false);
    return signInWithPopup(auth,googleProvider)
  }

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(false);
    return signOut(auth);
  };

    const updateUserProfile = (name, image) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
    };

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    gooleLogin,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContaxt.Provider value={authInfo}>{children}</AuthContaxt.Provider>
  );
};
export default AuthProvider;
