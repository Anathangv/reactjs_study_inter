import { createContext, useMemo, useState } from "react";

import {
  signInAdp,
  signUp,
  SignInData,
  SignUpData,
  meAdp,
} from "../services/ressources/user";

interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}

interface ContextData {
  user: UserDto;
  userSignIn: (userData: SignInData) => Promise<UserDto>;
  userSignUp: (userData: SignUpData) => Promise<UserDto>;
  getCurrentUser: () => Promise<UserDto>;
}

export interface AuthContextProps {
  children?: React.ReactNode;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

export function AuthProvider(props: AuthContextProps) {
  const { children } = props;

  const [user, setUser] = useState<UserDto>(() => {
    const user = localStorage.getItem("@Inter:User");

    if (user) return JSON.parse(user);

    return {} as UserDto;
  });

  const getCurrentUser = async () => {
    const { data } = await meAdp();
    setUser(data);
    localStorage.setItem("@Inter:User", JSON.stringify(data));
    return data as UserDto;
  };

  const userSignIn = async (userData: SignInData) => {
    const dataRespose = await signInAdp(userData);
    const data = dataRespose.data[0];

    if (data?.status === "error") return data;

    if (data.accessToken)
      localStorage.setItem("@Inter:Token", data.accessToken);

    return getCurrentUser();
  };

  const userSignUp = async (userData: SignUpData) => {
    const { data } = await signUp(userData);

    localStorage.setItem("@Inter:Token", data.accessToken);

    return getCurrentUser();
  };

  return (
    <AuthContext.Provider
      value={{ user, userSignIn, userSignUp, getCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
