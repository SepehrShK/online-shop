import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useAuth } from "../context/useAuth";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const { logout, isLoggedIn } = useAuth();
    const [openProfile, setOpenProfile] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <nav className="nav">
            <div className="right-nav">
                {/* نحوه نمایش لینک ها به اندازه صفحه و فشرده شدن دکمه منو بستگی داره */}
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li className="nav-link">
                        <Link to="/">خانه</Link>
                    </li>
                    {/* اگه فرد وارد نشده باشه */}
                    {!isLoggedIn && (
                        <li className="nav-link" >
                            <Link to="/Login">ورود</Link>
                        </li>
                    )}
                    {/* اگه فرد وارد شده باشه */}
                    {isLoggedIn && (
                        <li className="nav-link" onClick={() => setOpenProfile(!openProfile)}>
                            <RiArrowDropDownLine className={`arrow-icon ${openProfile ? "up" : ""}`} size={30}/>
                            <span>ادمین</span>
                            
                            {/* باز یا بسته بودن پروفایل */}
                            {openProfile && (
                                <ul className="dropdown-menu">
                                    <li className="logout-button" onClick={() => {
                                        logout()
                                        setOpenProfile(false)
                                    }}>خروج از حساب</li>
                                </ul>
                            )}
                        </li>
                    )}
                </ul>
                {/* دکمه منو هنگام کوچیک بودن صفحه */}
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <GiHamburgerMenu className="hamburger-icon" size={30} />
                </div>
            </div>
            {/* فیلد سرچ محصول */}
            <div className="input-div">
                {<CiSearch size={20}/>}
                <input className="input-field" placeholder="جست و جو..." />
            </div>
        </nav>
    )
}

export default Navbar
