import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import CardContextProvider from './context/CardContext';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div>
      <CardContextProvider>
        <BrowserRouter>
          <header>
            <NavBar/>
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer label='Venta de articulos deportivos' />}/>
            <Route path='/category/:categoryId' element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />} />
          </Routes>  
        </BrowserRouter>
      </CardContextProvider>  
    </div>
  );
}

export default App;