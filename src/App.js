import { useState } from 'react';
import './App.css';
import InList from  "./components/InList"

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


function App() {

  const [instrumentList, setInstrumentList] = useState([ { "id": 1, "category": "Guitar", "name": "Fender Stratocaster","toCart": "false"}, 
  { "id": 2, "category": "Keyboard", "name": "Yamaha P-125","toCart": "false" }, 
  { "id": 3, "category": "Drum", "name": "DW Collector's Series","toCart": "false" } ])

  const [cart, setCart] = useState([])


  const addedToCart = (item) => {
    setCart([...cart, item]);
    console.log(`Added ${item.name}`);}

  const removedFromCart = (removedItem) =>{
    setCart(cart.filter((item)=>item.id != removedItem.id))
    console.log(`removed ${removedItem.name}`)
  }
  

  const updateCart = (item) =>{  

    //this will first check if item has been added or not added to cart 
    //if its been added, then callTheFunction will become addedToCart and itll be called below
    const callTheFunction = item.toCart ? addedToCart : removedFromCart
    callTheFunction(item);
    
    const updatedItem = instrumentList.map((theItem) => 
    theItem.id === item.id ? {...theItem, toCart: !item.toCart } : theItem
  )
    
    setInstrumentList(updatedItem)
  }


  return (
    <div >

      <h1>Music Store</h1>

      <InList instrumentList={instrumentList} updateCart={updateCart}/>
 
    </div>
  );
}

export default App;
library.add(fab, fas, far)
