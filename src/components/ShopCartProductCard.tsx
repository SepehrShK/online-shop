import { GoTrash } from "react-icons/go"
import { useShopCart } from "../context/shopCartContext/useShopCart"
import { FaMinus, FaPlus } from "react-icons/fa"

interface ShopCartInterface{
    id: number
    name: string
    price: number
    imgurl: string
    quantity: number
}

const ShopCartProductCard: React.FC<ShopCartInterface> = ({ id, name, price, imgurl, quantity }) => {
    const { removeFromCart, addToQuantity, subtractFromQuantity } = useShopCart()
    
    return (
        <div className='shopCart-product'>
            <div className="shopCart-photo-name">
                <img src={imgurl} alt="photo" />
                <p>{name}</p>
            </div>
            <div className="price-quantity">
                <div className="quantity-control">
                    <FaPlus onClick={() => addToQuantity(id)} />
                    <span>{quantity}</span>

                    {quantity <= 1 && (
                        <GoTrash onClick={() => removeFromCart(id)} />
                    )}
                    {quantity > 1 && (
                        <FaMinus onClick={() => subtractFromQuantity(id)} />
                    )}
                </div>
                <p>{price.toLocaleString("fa-IR")} تومان</p>
            </div>
        </div>
    )
}

export default ShopCartProductCard
