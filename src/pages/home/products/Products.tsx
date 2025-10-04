import ProductCard from "../../../components/ProductCard";
import './Products.css'
import { useData } from "../../../context/dataContext/useData";


const Products: React.FC<{ searchProduct: string }> = ({ searchProduct }) => {
    const {products} = useData()

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
