import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import './Products.css'

interface Product{
    id: number
    name: string
    price: number
    imgurl: string
}

const Products: React.FC<{searchProduct: string}> = ({searchProduct}) => {
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

    //فیلتر کارت محصولات بر اساس ورودی در منوی بالای صفحه
    const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(searchProduct.toLowerCase()));
    const result = filteredProducts.map(({ id, name, price, imgurl }) => (
        <ProductCard key={id} id={id} name={name} price={price} imgurl={imgurl} />
    ))
    
    return (
        <section className="products-section">
            <h1>محصولات</h1>
            {filteredProducts.length > 0 ? (
                <div className="products-component">
                    {result}
                </div>
            ) : (
                <p>محصولی یافت نشد</p>
            )}
        </section>
    )
}

export default Products
