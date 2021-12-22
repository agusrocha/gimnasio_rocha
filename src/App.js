import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import Cart from './components/cart/Cart';
import CartWidget from './components/cardwidget/CardWidget';

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <header>
            <NavBar/>
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer label='Venta de articulos deportivos' />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart' element={<CartWidget/>}/>
          </Routes>  
        </BrowserRouter>
      </CartContextProvider>  
    </div>
  );
}

export default App;