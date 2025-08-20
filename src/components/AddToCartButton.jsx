
import { useSelector, useDispatch } from 'react-redux'
import { addItem, getQuantity} from '../reducer/cartSlice'
import { BsCartPlus } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { gbpFormatter } from '../utils/currencyFormatter';

const AddToCartButton = ({ product }) => {
    const count = useSelector(state => getQuantity(state.cart, product.id));
  const dispatch = useDispatch();

const  addtoCart = (product) => {
  dispatch(addItem(product));
}

  return (
    
    <>
      <div className="row text-center">
      <div className='col-8 text-left' 
          style={{border: '1px solid #a39e9eff',
            fontWeight:'bolder'
          }} bg="info" >
      <h1>
        {gbpFormatter.format(product.unitPrice)}
        </h1>
        </div> 
      <div className="col-4">
      <button  disabled={count > 0}  className={count > 0?"btn btn-secondary":"btn btn-warning"}>
        <BsCartPlus style={{fontWeight: 'bolder', fontSize: '25px', color: 'black'}} 
        onClick={() => addtoCart(product)} />
      </button></div>   </div>
    </>
   
  )}


export default AddToCartButton


