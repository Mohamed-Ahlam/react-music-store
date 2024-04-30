import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function InItem(props){
    const {item, updateCart, toggleFavorite} = props
    return(
        <div className="item">
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>

            {/* updateCart takes item from list and it returns whether answer from addToCart/removeFromCart  */}
            {/* to update the plus/minus sign it first checks to see if item.tocart is true meaning it has NOT been added to cart meaning u change the plus to a minus and add item to cart else u do opposite */}
            <button onClick={() => updateCart(item)}>
                {item.toCart ? <FontAwesomeIcon icon="fa-solid fa-square-plus" /> : <FontAwesomeIcon icon="fa-solid fa-square-minus" />}
            </button>

            <button onClick={() => toggleFavorite(item)}> 
            {item.isFavorite ? <FontAwesomeIcon icon="fa-regular fa-heart" /> : 
                <FontAwesomeIcon icon="fa-solid fa-heart" />  }
            </button>

        </div>
    )
}

export default InItem;
