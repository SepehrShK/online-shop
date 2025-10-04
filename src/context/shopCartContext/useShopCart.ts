import { useContext } from 'react';
import { ShopCartContext } from './ShopCartContext';

//برای اینکه اگه در خارج از پروایدر به اشتباه ازش استفاده کردیم به مشکل نخوریم
export const useShopCart = () => {
    const context = useContext(ShopCartContext);
    if (!context) {
        throw new Error('useShopCart must be used inside ShopCartProvider');
    }
    return context;
};