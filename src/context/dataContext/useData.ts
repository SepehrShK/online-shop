import { useContext } from 'react';
import { DataContext } from './DataContext';

//برای اینکه اگه در خارج از پروایدر به اشتباه ازش استفاده کردیم به مشکل نخوریم
export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used inside DataProvider');
    }
    return context;
};
