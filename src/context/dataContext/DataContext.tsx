import { createContext, useCallback, useEffect, useState, type ReactNode } from "react"

interface Product{
    id: number
    name: string
    price: number
    imgurl: string
}

interface DataInterface{
    products: Product[]
    loading: boolean
    error: string | null
    refetch: () => Promise<void>
}

const DataContext = createContext<DataInterface | undefined>(undefined)

const PRODUCTS_URL = "https://online-shop-production-9248.up.railway.app/products"
const MAX_ATTEMPTS = 3

const DataProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        setError(null);

        let lastError: unknown;

        for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
            try {
                const res = await fetch(PRODUCTS_URL);
                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }

                const data = await res.json();
                if (!Array.isArray(data)) {
                    throw new Error("Invalid response");
                }

                setProducts(data.map(p => ({
                    ...p,
                    id: Number(p.id),
                    price: Number(p.price)
                })));
                setLoading(false);
                return;
            } catch (err) {
                lastError = err;
                if (attempt < MAX_ATTEMPTS) {
                    await new Promise(resolve => setTimeout(resolve, 500 * attempt));
                }
            }
        }

        console.error("Error fetching products:", lastError);
        setError("خطا در دریافت محصولات");
        setLoading(false);
    }, []);
    
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <DataContext.Provider value={{products, loading, error, refetch: fetchProducts}}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }
