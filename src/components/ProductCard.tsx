interface ProductCardProp{
    id: number
    name: string
    price: number
    imgurl: string
}

const ProductCard: React.FC<ProductCardProp> = ({ id, name, price, imgurl }) => {

    const addToShoplist = () => {
        console.log(id);
    }

    return (
        <div className="product-card">
            <img src={imgurl} alt={'photo'}/>
            <p className="name-p">{name}</p>
            <p className="price-p">{price.toLocaleString("fa-IR")} تومان</p>

            <button type="button" onClick={addToShoplist}>افزودن به سبد خرید</button>
        </div>
    )
}

export default ProductCard
