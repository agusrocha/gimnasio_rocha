import Item from "../item/Item";
import './Itemlist.css';

const ItemList = ({products}) => {
    return (
        <ul className='ulItemList'>
            {products.map(products => <Item key={products.id} products={products} />)}
        </ul>
    )
}

export default ItemList;