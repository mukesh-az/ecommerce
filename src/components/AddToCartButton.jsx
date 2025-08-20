
import { useSelector, useDispatch } from 'react-redux'
import { addItem, getQuantity} from '../reducer/cartSlice'

const AddToCartButton = ({ product }) => {
    const count = useSelector(state => getQuantity(state.cart, product.id));
  const dispatch = useDispatch();

const  addtoCart = (product) => {
  dispatch(addItem(product));
}

  return (
    
   <input  disabled={count > 0}  className="btn btn-info" type='button' name='[+Add to Cart]' onClick={() => addtoCart(product)}  value="[+Add to Cart]" />  )
}


export default AddToCartButton


