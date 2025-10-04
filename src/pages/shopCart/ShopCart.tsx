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
    const { cart , clearCart } = useShopCart()

    const shopCartDetails: ShopCartInterface[] = cart.map((cartItem) => {
        const cartProduct = products.find((p) => p.id === cartItem.id)!
        return { ...cartProduct, quantity: cartItem.quantity }
    })
    const result = shopCartDetails.map(({id, name, price, imgurl, quantity}) => (
        <ShopCartProductCard key={id} id={id} name={name} price={price} imgurl={imgurl} quantity={quantity}/>
    )) 

    return (
        <section className='shopCart-section'>
            <h2>سبد خرید</h2>
            {result}
            <button onClick={clearCart}>حذف سبد خرید</button>
        </section>
    )
}

export default ShopCart
