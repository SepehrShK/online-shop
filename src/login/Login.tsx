import { useEffect, useState, type FormEvent } from 'react';
import { useAuth } from '../context/useAuth';
import { useNavigate } from 'react-router-dom';
import './login.css'

interface LoginResponse {
    success: boolean
    message: string
    role: string
}

const Login = () => {
    const {login} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            //بررسی اینکه اطلاعات درست هست یا نه
            const res = await fetch('https://online-shop-production-9248.up.railway.app/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data: LoginResponse = await res.json()
            setMessage(data.message)
            setShowPopup(true)
            if (data.success) {
                login(data.role)
                setTimeout(() => {
                    navigate("/")
                }, 1500);
            }
        } catch {
            setMessage('Server error')
            setShowPopup(true)
        }
    };
    //نمایش پاپ آپ وپاک شدن خودکار
    useEffect(() => {
        if (showPopup) {
            setTimeout(() => {
                setShowPopup(false);
            }, 1500);
        }
    }, [showPopup]);

    return (
        <section className='login-section'>
            {showPopup && (
                <div className='popup'>
                    <p>{message}</p>
                </div>
            )}
            <form className='login-form' onSubmit={handleSubmit}>
                <label htmlFor='username' >نام کاربری:</label>
                <input id='username' type='text' placeholder='username is admin' value={username} onChange={e => setUsername(e.target.value.toLowerCase())} />

                <label htmlFor='password' >رمز عبور:</label>
                <input id='password' type='password' placeholder='password is 1234' value={password} onChange={e => setPassword(e.target.value)} />

                <button type="submit">ورود</button>
            </form>
        </section>
    );
}

export default Login
