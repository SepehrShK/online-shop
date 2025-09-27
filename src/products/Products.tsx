import { useEffect, useState } from "react";

interface Product {
    id: number
    name: string
    price: number
    imgURL: string
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);


useEffect(() => {
    const fetchProducts = async () => {
        try {
            const res = await fetch("http://localhost:5000/products");
            const data: Product[] = await res.json();
            setProducts(data);
        } catch (err) {
            console.error("Error fetching products:", err);
        }
    };

    fetchProducts();
}, []);

    
    return (
        <div>
            <h1>محصولات</h1>
            <ul>
                {products.map(p => (
                    <li key={p.id}>
                        <img src={p.imgURL} alt={'photo'} style={{ width:'200px', height:'auto'}}/>
                        <p>{p.name} - تومان {p.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products
