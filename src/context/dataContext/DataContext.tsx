import { createContext, useEffect, useState, type ReactNode } from "react"

interface Product{
    id: number
    name: string
    price: number
    imgurl: string
}

interface DataInterface{
    products: Product[]
}

const DataContext = createContext<DataInterface | undefined>(undefined)

const DataProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    
    //دریافت محصولات هنگام باز شدن صفحه خانه
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://online-shop-production-9248.up.railway.app/products");
                const data: Product[] = await res.json();
                
                setProducts(data.map(p => ({
                    ...p,
                    id: Number(p.id),
                    price: Number(p.price)
                })));
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        fetchProducts();
    }, []);

    return (
        <DataContext.Provider value={{products}}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }
