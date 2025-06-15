export interface User {
  email: string;
  password: string;
  name: string;
  farmLocation: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}