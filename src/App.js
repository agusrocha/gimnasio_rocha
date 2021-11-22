import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <ItemListContainer label='Venta de articulos deportivos' />
    </div>
  );
}

export default App;