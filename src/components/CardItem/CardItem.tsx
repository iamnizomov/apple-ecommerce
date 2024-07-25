import React from "react";

type StoreItemProps = {
    id: number
    name: string
    tags: string[]
    price: number
    imgUrl: string
}

const CardItem = ({ id, name, tags, price, imgUrl }: StoreItemProps) => {
    <article className="products__list-item product-item" data-id={id}>
        <div className="product-item__image-container">
            <img src={imgUrl} alt={name} className="product-item__image" />
        </div>
        <h3 className="product-item__heading">{name}</h3>
        <div className="product-item__tags-container">
            {tags.map((tag: string, index: number) => <span className="product-item__tag">{tag}</span>)}
        </div>
        <div className="product-item__description-container">
            <span className="product-item__price">{price}</span>
            <button className="product-item__add-to-cart-button">
                <img src="/public/add-to-cart.png" alt="Add To Cart Logo" />
            </button>
        </div>
    </article>
}

export default CardItem;