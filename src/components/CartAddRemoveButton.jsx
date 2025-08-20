import { useSelector, useDispatch } from 'react-redux'
import { updateQuantity, removeItem} from '../reducer/cartSlice'

const CartAddRemoveButton = ({ product }) => {
  const dispatch = useDispatch();
  return (
    
    
 <div >
            <button
              disabled={product.itemCount <= 1}
              onClick={() => dispatch(updateQuantity( { ...product, itemCount: product.itemCount - 1 }))}   className="btn btn-info" >
              -
            </button>
            {product.itemCount}
            <button  onClick={() =>  
                dispatch(updateQuantity( { ...product, itemCount: product.itemCount + 1 }))}   className="btn btn-info" >
              +
            </button>
          </div>
  )}


export default CartAddRemoveButton
