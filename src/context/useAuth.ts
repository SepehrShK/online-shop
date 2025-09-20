import { useContext } from 'react';
import { AuthContext } from './AuthContext';

//برای اینکه اگه در خارج از پروایدر به اشتباه ازش استفاده کردیم به مشکل نخوریم
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used inside AuthProvider');
    }
    return context;
};
