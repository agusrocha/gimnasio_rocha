import Item from "../item/Item";
import './Itemlist.css';

const ItemList = ({products = []}) => {
    return (
        products.length !== 0 ? (
        <ul className='ulItemList'>
            {products.map(products => <Item key={products.id} products={products} />)}
        </ul>
        ) : (
            <div className='cargando'> Cargando...</div>
        )    
    )
}

export default ItemList;