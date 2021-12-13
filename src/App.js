import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer label='Venta de articulos deportivos' />
          </Route>
          <Route path='/category/:categoryId'>
            <ItemListContainer />
          </Route>
          <Route path='/item/:id'>
            <ItemDetailContainer />
          </Route>
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;