import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();

    const { pathname } = location;
    const splitLocation = pathname.split("/");

    console.log(splitLocation);

    return (
        <nav className="nav header__nav">
            <ul className="nav__menu-list">
                <li className="nav__menu-list-item">
                    <Link to="/" className={splitLocation[1] === "" ? "active nav__menu-list-item-link" : "nav__menu-list-item-link"}>Main</Link>
                </li>
                <li className="nav__menu-list-item">
                    <Link to="/products" className={splitLocation[1] === "products" ? "active nav__menu-list-item-link" : "nav__menu-list-item-link"}>Products</Link>
                </li>
                <li className="nav__menu-list-item">
                    <Link to="/about" className={splitLocation[1] === "about" ? "active nav__menu-list-item-link" : "nav__menu-list-item-link"}>About Us</Link>
                </li>
                <li className="nav__menu-list-item">
                    <Link to="/shop" className={splitLocation[1] === "shop" ? "active nav__menu-list-item-link" : "nav__menu-list-item-link"}>Shop</Link>
                </li>
                <li className="nav__menu-list-item">
                    <Link to="/contacts" className={splitLocation[1] === "contacts" ? "active nav__menu-list-item-link" : "nav__menu-list-item-link"}>Contacts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;