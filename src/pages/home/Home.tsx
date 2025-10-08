// import Dashboard from './dashboard/Dashboard'
import Products from './products/Products'


const Home: React.FC<{ searchProduct: string }> = ({ searchProduct }) => {
    return (
        <>
            {/* <Dashboard/> */}
            <Products searchProduct={searchProduct} />
        </>
    )
}

export default Home
