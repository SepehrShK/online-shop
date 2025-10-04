import { useShopCart } from "../context/shopCartContext/useShopCart"

interface ProductCardProp{
    id: number
    name: string
    price: number
    imgurl: string
}

const ProductCard: React.FC<ProductCardProp> = ({ id, name, price, imgurl }) => {
    const { addToShopCart } = useShopCart()

    return (
        <div className="product-card">
            <div className="product-info">
                <img src={imgurl} alt={'photo'} />
                <div className="product-p">
                    <p className="name-p">{name}</p>
                    <p className="price-p">{price.toLocaleString("fa-IR")} تومان</p>
                </div>
            </div>
            <button type="button" onClick={() => addToShopCart(id)}>افزودن به سبد خرید</button>
        </div>
    )
}

export default ProductCard
