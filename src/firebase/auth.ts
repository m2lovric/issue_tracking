import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
const auth = getAuth();

const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
  return auth.signOut();
};

export { login, logout };
