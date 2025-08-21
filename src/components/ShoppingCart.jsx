
import { useState, useEffect } from 'react';
import {CardWrapper, flexStyles} from "../style/cardWrapper";

import styled, { css } from "styled-components";
import Card from 'react-bootstrap/Card';
import productsData from '../data/products.json';
import CardImage from './cardImage';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import AddToCartButton from './AddToCartButton';
import {removeItem, getCartItems, removeCart, clearAllCartItems} from '../reducer/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Delete } from "../icons/index"
import { gbpFormatter } from '../utils/currencyFormatter';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import CartAddRemoveButton from './CartAddRemoveButton';
import PendingModal from './PendingModal';

const ShoppingCart   = () => {
    const [modalShow, setModalShow] = useState(false);
 let navigate = useNavigate();
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  //const totalCartItems = cartItems.reduce((acc, item) => acc + item.itemCount, 0);
  const totalCartValue = cartItems.reduce((acc, item) => acc + item.unitPrice * item.itemCount, 0).toFixed(2); 


  return (
    <>
<div class="row mt-3">
  <div class="col-2"></div>
 
  <div class="col-8">
    
    <div class="table-responsive">
        <table class="table table-striped 
                    table-bordered table-hover">
  <thead>
    <tr>
      <th className='col-1 ' scope="col"></th>
      <th scope="col">Product Name</th>
      <th className='text-center' scope="col">Price</th>
      <th className='col-3 text-center' scope="col">Quantity</th>
      <th className='col-2 text-center' scope="col">Total</th>
      <th className='col-1 text-center' scope="col"></th>
    </tr>
  </thead>
  <tbody>

      {cartItems.map((variant, i) => (
        <tr key={variant.id}>
          <td className='text-center'> 
             <CardImage text="img-1" height="30px" width="30px" /></td>
          <td>
            <Link to={`/products/${variant.id}`}>{variant.title}</Link>
          </td>
          <td  className='text-center'>{variant.unitPrice}</td>
          <td className='text-center'>
            <CartAddRemoveButton product={variant} />

          </td>
          <td  className='text-center'>{ gbpFormatter.format(variant.unitPrice * variant.itemCount)}</td>
           <td className='text-center' scope="col">
         <button  onClick={() =>  
                dispatch(removeItem( variant))}   className="btn btn-danger" >
             <Delete />
            </button>

           </td>
        </tr>
      ))}
      <tr key="totalCartItems">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td  className='text-center'> <b>{gbpFormatter.format(totalCartValue)}</b></td>
           <td scope="col">



           </td>
        </tr>
 <tr key="cartItemFooter">
          <td className='text-center' colSpan={6}>
             <Link to="/products">
          <Button variant="flat" size="xxl">
             Continue Shopping....
        </Button>
      </Link>
     <button  onClick={ () =>  {
             dispatch(clearAllCartItems()).then(() => {
             navigate("/");
            });
          }}   className="btn btn-danger" >
            Clear Cart <Delete />
            </button>


        <Button variant="flat" size="xxl"
         onClick={() => setModalShow(true)}
        >
             Checkout (Comming soon.......)
        </Button>


      <PendingModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

           </td>
        </tr>



        </tbody>
</table>
      </div>

  </div>
  <div class="col-2"></div>

</div>
</>
  )
}

export default ShoppingCart
