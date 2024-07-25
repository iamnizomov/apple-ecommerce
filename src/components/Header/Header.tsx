import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo-link">
                    <img src="../../../public/logo.png" alt="Apple Logo" className="header__logo-image" />
                </Link>
                <Navbar />
                <div className="cart header__cart-container">
                    <img src="../../../public/cart-icon.png" alt="Cart Icon" className="cart__icon" />
                    <span className="cart__count">2</span>
                </div>
            </div>
        </header>
    )
}

export default Header;