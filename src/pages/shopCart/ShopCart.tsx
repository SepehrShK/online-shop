import './ShopCart.css'
import { useData } from "../../context/dataContext/useData";
import { useShopCart } from '../../context/shopCartContext/useShopCart';
import ShopCartProductCard from '../../components/ShopCartProductCard';

interface ShopCartInterface{
    id: number
    name: string
    price: number
    imgurl: string
    quantity: number
}

const ShopCart = () => {
    const { products } = useData()
    const { cart, clearCart } = useShopCart()
    
    if (!products.length) return <p>در حال بارگذاری محصولات...</p>;


    const shopCartDetails: ShopCartInterface[] = cart.map((cartItem) => {
        const cartProduct = products.find((p) => p.id === cartItem.id)!
        return { ...cartProduct, quantity: cartItem.quantity }
    })
    const result = shopCartDetails.map(({id, name, price, imgurl, quantity}) => (
        <ShopCartProductCard key={id} id={id} name={name} price={price} imgurl={imgurl} quantity={quantity}/>
    ))
    const sum = shopCartDetails.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section className='shopCart-section'>
            <h2>سبد خرید</h2>
            <div className='shopCart-body'>
                <div className='shopCart-box'>{result}</div>

                <div className='shopCart-side'>
                    <h3>مجموع خرید</h3>
                    <p>{sum.toLocaleString("fa-IR")} تومان</p>
                    <button type='button' onClick={clearCart}>حذف سبد خرید</button>
                </div>
            </div>  
        </section>
    )
}

export default ShopCart
