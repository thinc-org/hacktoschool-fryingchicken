import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import toast from 'react-hot-toast';

import { api } from '../utils/axios';

interface IAuthContext {
  isLoggedIn: boolean;
  username: string | null;
  role: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  if (typeof window !== 'undefined') {
    useEffect(() => {
      const token = localStorage.getItem('token');
      const localUsername = localStorage.getItem('username');
      const localRole = localStorage.getItem('role');
      setLoggedIn(!!token);
      setUsername(localUsername);
      setRole(localRole);
    }, []);
  }

  const login = async (username: string, password: string) => {
    username = username.trim();

    try {
      const res1 = await api.get(`/users/${username}`);
      const role = res1.data.role;

      if (res1.data.password !== password) {
        throw new Error("Password doesn't match");
      }

      const res = await api.post('/auth/login', {
        username,
        password,
        role,
      });

      localStorage.setItem('token', res.data.access_token);
      localStorage.setItem('username', username);
      localStorage.setItem('role', role);
      setUsername(username);
      setLoggedIn(true);
      setRole(role);
    } catch (err: any) {
      let message = 'Unknown Error';
      if (!!err.message) message = err.message;
      throw new Error(message);
    }
  };

  const logout = () => {
    toast.success('Log out successfully');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('role');
    setUsername(null);
    setLoggedIn(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        username,
        role,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
