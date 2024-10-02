// src/contexts/AuthProvider.tsx
import  { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (userId: number, sessionId: string) => void;
  logout: () => void;
  userId: number | null;
  sessionId: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);

  const login = (userId: number, sessionId: string) => {
    setUserId(userId);
    setSessionId(sessionId);
  };

  const logout = () => {
    setUserId(null);
    setSessionId(null);
  };

  const isAuthenticated = !!userId;

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userId, sessionId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
