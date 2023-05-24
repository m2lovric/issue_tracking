import { create } from 'zustand';
import { login, logout } from '../firebase/auth';
import { AuthStore } from '../types';

const useAuth = create<AuthStore>((set) => ({
  user: null,
  loginUser: async ({ email, password }) => {
    try {
      const userCred = await login(email, password);
      set({ user: userCred.user });
    } catch (error) {
      console.log(error);
    }
  },
  logoutUser: async () => {
    try {
      await logout();
      set({ user: null });
    } catch (error) {
      console.error(error);
    }
  },
}));

export { useAuth };
