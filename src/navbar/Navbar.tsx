import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useAuth } from "../context/useAuth";
import { useState } from "react";

const Navbar = () => {
    const { logout, isLoggedIn } = useAuth();
    const [open, setOpen] = useState(false);

    return (
        <nav className="nav">
            <div className="right-nav">
                <ul className="nav-links">
                    <li className="home-link">
                        <Link to="/">home</Link>
                    </li>
                </ul>
            </div>
            <div className="input-div">
                {<CiSearch size={20}/>}
                <input className="input-field" placeholder="جست و جو..." />
            </div>
            <div className="left-nav">
                {/* اگه فرد وارد نشده باشه */}
                {!isLoggedIn && (
                    <button className="loginButton-userDropdown" type="button">
                        <span><Link to="/Login">ورود</Link></span>
                    </button>
                )}
                {/* اگه فرد وارد شده باشه */}
                {isLoggedIn && (
                    <div className="dropdown-box">
                        <button type="button" className="loginButton-userDropdown" onClick={() => setOpen(!open)}>
                            <RiArrowDropDownLine className={`arrow-icon ${open ? "up" : ""}`} size={30}/>
                            <span>ادمین</span>
                        </button>

                        {open && (
                            <ul className="dropdown-menu">
                                <li className="logout-button" onClick={() => {
                                    logout()
                                    setOpen(false)
                                }}>خروج از حساب</li>
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
