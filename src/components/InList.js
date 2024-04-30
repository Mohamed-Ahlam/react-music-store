import React from "react";
import InItem from "./InItem";


// this takes list from App and displays it 
function InList(props){ 

    const {instrumentList, updateCart } = props

    return(
        <div className="list">
            {instrumentList.map( 
                (listItem) => 
                <InItem item={listItem} updateCart={updateCart}/>
            )}
        </div>
    )
}

export default InList;