interface LoginType {
  email: string;
  password: string;
}

type User = firebase.User | null;

interface AuthStore {
  user: User;
  loginUser: ({ email, password }: LoginType) => Promise<void>;
  logoutUser: () => Promise<void>;
}

export { LoginType, AuthStore };
