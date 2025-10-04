import { createContext, useEffect, useState, type ReactNode } from "react"

interface CartItem{
    id: number
    quantity: number
}

interface ShopCartInterface{
    cart: CartItem[]
    addToShopCart: (id: number) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
}

//context
const ShopCartContext = createContext<ShopCartInterface| undefined>(undefined)

//provider
const ShopCartProvider = ({ children }: { children: ReactNode }) => {
    const getCart: () => CartItem[] = () => { return JSON.parse(localStorage.getItem('cart') || '[]') }
    const [cart, setCart] = useState(getCart());

    //هر زمانی سبد تغییر کنه به حافظه لوکال میره
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    //اضافه شدن به سبد خرید و افزایش به تعداد در صورت وجود داشتن
    const addToShopCart = (id: number) => {
        setCart((prev) => {
            const exist = prev.find((item) => item.id === id)
            if (exist) {
                return prev.map((item) => (
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                ))
            } else {
                return [...prev, { id, quantity: 1 }]
            }
        })
    }

    //حذف محصول
    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    //حذف سبد خرید
    const clearCart = () => setCart([])

    return (
        <ShopCartContext.Provider value={{ cart, addToShopCart, removeFromCart, clearCart}}>
            {children}
        </ShopCartContext.Provider>
    )
}

export { ShopCartContext, ShopCartProvider }
