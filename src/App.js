import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <ItemListContainer label='Venta de articulos deportivos' />
      <ItemDetailContainer />
    </div>
  );
}

export default App;