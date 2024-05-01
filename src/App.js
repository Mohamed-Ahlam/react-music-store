import { useState } from 'react';
import './App.css';
import InList from  "./components/InList"

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// import router
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';




function App() {

  const [instrumentList, setInstrumentList] = useState([ { "id": 1, "category": "Guitar", "name": "Fender Stratocaster","toCart": "false", "isFavorite":"false"}, 
  { "id": 2, "category": "Keyboard", "name": "Yamaha P-125","toCart": "false" , "isFavorite":"false"}, 
  { "id": 3, "category": "Drum", "name": "DW Collector's Series","toCart": "false", "isFavorite":"false" } ])

  const [cart, setCart] = useState([])


  const addedToCart = (item) => {
    setCart([...cart, item]);
    console.log(`Added ${item.name}`);}

  const removedFromCart = (removedItem) =>{
    setCart(cart.filter((item)=>item.id !== removedItem.id))
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
    if(favItem.isFavorite){console.log(`Put ${favItem.name} to Favorites`)}
    else{console.log(`Taken ${favItem.name} out From Favorites`)}

    setInstrumentList(updateFavorite)
  }


  return (
    <Router>
      <div >
        <div>
        <h1>Music Store</h1>
        </div>

        <nav>
          <Link to="/" className="navItem">Home</Link>
          <Link to="/drum" className="navItem">Drum</Link>
          <Link to="/guitar" className="navItem">Guitar</Link>
          <Link to="/keyboard" className="navItem">Keyboard</Link>
        </nav>

        <Routes>
          <Route path="/"
          element={<InList instrumentList={instrumentList} updateCart={updateCart} toggleFavorite={toggleFavorite}/>}
          exact/>        

          {/* it makes a "new page" "drums", we dont really make a new page we just filter the list to make a new list of ONLY drum items and send it to InstrumentList, now the InstrumentList component will render and show only drum items */}
          <Route path="/drum"
          element={<InList instrumentList={instrumentList.filter((item)=> item.category === 'Drum')} updateCart={updateCart} toggleFavorite={toggleFavorite}/>}
          />
          <Route path="/guitar"
          element={<InList instrumentList={instrumentList.filter((item)=> item.category === 'Guitar')} updateCart={updateCart} toggleFavorite={toggleFavorite}/>}
          />   
          <Route path="/keyboard"
          element={<InList instrumentList={instrumentList.filter((item)=> item.category === 'Keyboard')} updateCart={updateCart} toggleFavorite={toggleFavorite}/>}
          />      
        </Routes>
        
  
      </div>
    </Router>
    
  );
}

export default App;
library.add(fab, fas, far)
