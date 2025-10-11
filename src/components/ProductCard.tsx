import { useState } from "react"
import { useShopCart } from "../context/shopCartContext/useShopCart"

interface ProductCardProp{
    id: number
    name: string
    price: number
    imgurl: string
}

const ProductCard: React.FC<ProductCardProp> = ({ id, name, price, imgurl }) => {
    const { addToShopCart } = useShopCart()
    const [addToShopText, setAddToShopText] = useState('افزودن به سبد خرید')

    const changeText = () => {
        setAddToShopText('اضافه شد')
        setTimeout(() => {
            setAddToShopText('افزودن به سبد خرید')
        }, 1500);
    }


    return (
        <div className="product-card">
            <div className="product-info">
                <img src={imgurl} alt={'photo'} />
                <div className="product-p">
                    <p className="name-p">{name}</p>
                    <p className="price-p">{price.toLocaleString("fa-IR")} تومان</p>
                </div>
            </div>
            <button type="button" onClick={() => {
                addToShopCart(id)
                changeText()
            }}>{addToShopText}</button>
        </div>
    )
}

export default ProductCard
