import { useAuth } from '../context/useAuth';
import Products from '../products/Products';

const Dashboard = () => {
    const { role } = useAuth();

    return (
        <div>
            {role !== 'admin' && (
                <div>
                    <h2>پنل کاربر عادی</h2>
                    <p>سلام کاربر عادی</p>
                </div>
            )}

            {role === 'admin' && (
                <div>
                    <h2>پنل ادمین</h2>
                    <p>سلام ادمین</p>
                </div>
            )}
            <Products/>
        </div>
    );
}

export default Dashboard
