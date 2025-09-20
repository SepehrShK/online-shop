import { createContext, useState, type ReactNode } from 'react';

interface AuthContextType {
    isLoggedIn: boolean
    role: string;
    login: (role: string) => void;
    logout: () => void;
}

//context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

//provider
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('role'));
    const [role, setRole] = useState(localStorage.getItem('role') || 'user');

    const login = (role: string) => {
        setRole(role);
        setIsLoggedIn(true)
        localStorage.setItem('role', role);
    };

    const logout = () => {
        setRole('user');
        setIsLoggedIn(false)
        localStorage.removeItem('role');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider, AuthContext}
