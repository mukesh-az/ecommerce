import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeItem} from '../reducer/cartSlice'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { Plus, Minus } from "../icons/index"

const CartAddRemoveButton = ({ product }) => {
  const dispatch = useDispatch();
  return (
    
    
 <div>
            <button
              disabled={product.itemCount <= 1}
              className= { product.itemCount <= 1 ? "btn btn-secondary" : 
                "btn btn-primary"}
              onClick={() => dispatch(updateQuantity( { ...product, itemCount: product.itemCount - 1 }))} >
              <Minus />
            </button>
            <div style={{ width: "50px" }} className='btn btn-border'>
            {product.itemCount}
            </div>
            <button
             disabled={product.itemCount >= product.quantity }
             className= {product.itemCount >= product.quantity ? "btn btn-secondary" : 
              "btn btn-primary"}
             onClick={() =>  
             dispatch(updateQuantity( { ...product, itemCount: product.itemCount + 1 }))}>
              <Plus />
            </button>
          </div>
  )}


export default CartAddRemoveButton
