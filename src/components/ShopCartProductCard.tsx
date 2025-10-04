import { useShopCart } from "../context/shopCartContext/useShopCart"

interface ShopCartInterface{
    id: number
    name: string
    price: number
    imgurl: string
    quantity: number
}

const ShopCartProductCard: React.FC<ShopCartInterface> = ({ id, name, price, imgurl, quantity }) => {
    const { removeFromCart } = useShopCart()
    
    return (
        <div className='shopCart-product'>
            <img src={imgurl} alt="photo" />
            <h2>{quantity}</h2>
            <div>
                <p>{name}</p>
                <p>{price.toLocaleString('fa-IR')} تومان</p> 
            </div>
            <button type="button" onClick={() => removeFromCart(id)}>حذف محصول</button>
        </div>
    )
}

export default ShopCartProductCard
