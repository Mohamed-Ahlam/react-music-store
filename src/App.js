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

  const [instrumentList, setInstrumentList] = useState([ { "id": 1, "category": "Guitar", "name": "Fender Stratocaster","toCart": "false", "isFavorite":"false"}, 
  { "id": 2, "category": "Keyboard", "name": "Yamaha P-125","toCart": "false" , "isFavorite":"false"}, 
  { "id": 3, "category": "Drum", "name": "DW Collector's Series","toCart": "false", "isFavorite":"false" } ])

  const [cart, setCart] = useState([])


  const addedToCart = (item) => {
    setCart([...cart, item]);
    console.log(`Added ${item.name}`);}

  const removedFromCart = (removedItem) =>{
    setCart(cart.filter((item)=>item.id != removedItem.id))
    console.log(`removed ${removedItem.name}`)
  }
  

  const updateCart = (item) =>{  

    //this will first check if item is true meaning it has NOT been added to cart meaning u need to NOW call addedToCart and add item to cart
    const callTheFunction = item.toCart ? addedToCart : removedFromCart
    //if its been not been added, then callTheFunction will become addedToCart and call the addToCart(item)
    callTheFunction(item);

    //once item has been added/removed from cart then u update the item to true/false
    //the map basically takes in each obj in instrumentList and places it in a new list that we called updatedItem
    //inside map, it takes each item and checks to see if its equal to the theItem (the one we want to update)
    //it does {...theItem which means it gets the last thing in that object, which is toCart, and it does !item.toCart (do the opposite of what toCart is)
    //else it calls  : theItem meaning u just put that item in the updatedItem list 
    const updatedItem = instrumentList.map((theItem) => 
    theItem.id === item.id ? {...theItem, toCart: !item.toCart } : theItem
  )
    // update the list based of updatedItem
    setInstrumentList(updatedItem)
  }

  const toggleFavorite = (favItem) => {
    const updateFavorite = instrumentList.map((item) => item.id === favItem.id ? {...item, isFavorite: !item.isFavorite} : item)

    // only display when item is favorited
    if(favItem.isFavorite){console.log(`Added to Fav`)}

    setInstrumentList(updateFavorite)
  }


  return (
    <div >

      <h1>Music Store</h1>

      <InList instrumentList={instrumentList} updateCart={updateCart} toggleFavorite={toggleFavorite}/>
 
    </div>
  );
}

export default App;
library.add(fab, fas, far)
