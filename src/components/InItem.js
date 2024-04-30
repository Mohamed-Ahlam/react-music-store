import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function InItem(props){
    const {item, updateCart} = props
    return(
        <div className="item">
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            {/* <button onClick={() => addedToCart(item)}>
            <FontAwesomeIcon icon="fa-solid fa-square-plus" />
            </button> */}

            <button onClick={() => updateCart(item)}>
                {item.toCart ? <FontAwesomeIcon icon="fa-solid fa-square-plus" /> : <FontAwesomeIcon icon="fa-solid fa-square-minus" />}
            </button>

            {/* <button onClick={() => removedFromCart(item)}>
            <FontAwesomeIcon icon="fa-solid fa-square-minus" />
            </button> */}
        </div>
    )
}

export default InItem;
