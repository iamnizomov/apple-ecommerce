import Header from "../components/Header/Header";
import "./Products.scss";

const Products = () => {
    return (
        <>
            <Header />
            <main className="products">
                <div className="products__container">
                    <h1 className="products__heading">Products</h1>
                    <div className="products__list">
                        <article className="products__list-item product-item">
                            <div className="product-item__image-container">
                                <img src="/image1.png" alt="" className="product-item__image" />
                            </div>
                            <h3 className="product-item__heading">Apple Watch Silver Aluminum</h3>
                            <div className="product-item__tags-container">
                                <span className="product-item__tag">watch</span>
                                <span className="product-item__tag">apple</span>
                            </div>
                            <div className="product-item__description-container">
                                <span className="product-item__price">$319.00</span>
                                <button className="product-item__add-to-cart-button">
                                    <img src="/public/add-to-cart.png" alt="Add To Cart Logo" />
                                </button>
                            </div>
                        </article>
                        <article className="products__list-item product-item">
                            <div className="product-item__image-container">
                                <img src="/image2.png" alt="" className="product-item__image" />
                            </div>
                            <h3 className="product-item__heading">Gold Stainless Steel Case</h3>
                            <div className="product-item__tags-container">
                                <span className="product-item__tag">watch</span>
                                <span className="product-item__tag">apple</span>
                            </div>
                            <div className="product-item__description-container">
                                <span className="product-item__price">$319.00</span>
                                <button className="product-item__add-to-cart-button">
                                    <img src="/public/add-to-cart.png" alt="Add To Cart Logo" />
                                </button>
                            </div>
                        </article>
                        <article className="products__list-item product-item">
                            <div className="product-item__image-container">
                                <img src="/image3.png" alt="" className="product-item__image" />
                            </div>
                            <h3 className="product-item__heading">Apple Watch Silver Aluminum</h3>
                            <div className="product-item__tags-container">
                                <span className="product-item__tag">watch</span>
                                <span className="product-item__tag">apple</span>
                            </div>
                            <div className="product-item__description-container">
                                <span className="product-item__price">$319.00</span>
                                <button className="product-item__add-to-cart-button">
                                    <img src="/public/add-to-cart.png" alt="Add To Cart Logo" />
                                </button>
                            </div>
                        </article>
                        <article className="products__list-item product-item">
                            <div className="product-item__image-container">
                                <img src="/image4.png" alt="" className="product-item__image" />
                            </div>
                            <h3 className="product-item__heading">Space Gray Aluminum Case</h3>
                            <div className="product-item__tags-container">
                                <span className="product-item__tag">watch</span>
                                <span className="product-item__tag">apple</span>
                            </div>
                            <div className="product-item__description-container">
                                <span className="product-item__price">$319.00</span>
                                <button className="product-item__add-to-cart-button">
                                    <img src="/public/add-to-cart.png" alt="Add To Cart Logo" />
                                </button>
                            </div>
                        </article>
                        <article className="products__list-item product-item">
                            <div className="product-item__image-container">
                                <img src="/image5.png" alt="" className="product-item__image" />
                            </div>
                            <h3 className="product-item__heading">Apple Watch Silver Aluminum</h3>
                            <div className="product-item__tags-container">
                                <span className="product-item__tag">watch</span>
                                <span className="product-item__tag">apple</span>
                            </div>
                            <div className="product-item__description-container">
                                <span className="product-item__price">$319.00</span>
                                <button className="product-item__add-to-cart-button">
                                    <img src="/public/add-to-cart.png" alt="Add To Cart Logo" />
                                </button>
                            </div>
                        </article>
                        <article className="products__list-item product-item">
                            <div className="product-item__image-container">
                                <img src="/image6.png" alt="" className="product-item__image" />
                            </div>
                            <h3 className="product-item__heading">Apple Watch Silver Aluminum</h3>
                            <div className="product-item__tags-container">
                                <span className="product-item__tag">watch</span>
                                <span className="product-item__tag">apple</span>
                            </div>
                            <div className="product-item__description-container">
                                <span className="product-item__price">$319.00</span>
                                <button className="product-item__add-to-cart-button">
                                    <img src="/public/add-to-cart.png" alt="Add To Cart Logo" />
                                </button>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Products;