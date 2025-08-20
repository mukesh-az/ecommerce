
import { useState, useEffect } from 'react';
import {CardWrapper, flexStyles} from "../style/cardWrapper";

import styled, { css } from "styled-components";
import Card from 'react-bootstrap/Card';
import productsData from '../data/products.json';
import CardImage from './cardImage';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import AddToCartButton from './AddToCartButton';
import {removeItem, getCartItems} from '../reducer/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

import CartAddRemoveButton from './CartAddRemoveButton';

const ShoppingCart   = () => {

  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.itemCount, 0);
  const totalCartValue = cartItems.reduce((acc, item) => acc + item.unitPrice * item.itemCount, 0).toFixed(2); 


  return (
    <>
<div class="row mt-3">
  <div class="col-2"></div>
 
  <div class="col-8">
    
     <div className="d-flex flex-row" style={{ maxWidth: '100%', justifyContent: 'left', flexWrap: 'wrap'
      } }>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>

      {cartItems.map((variant, i) => (
        <tr key={variant.id}>
          <td>{i+1}</td>
          <td>{variant.title}</td>
          <td>{variant.unitPrice}</td>
          <td>
            <CartAddRemoveButton product={variant} />

          </td>
          <td>{variant.unitPrice * variant.itemCount}</td>
           <th scope="col">
         <button  onClick={() =>  
                dispatch(removeItem( variant))}   className="btn btn-info" >
              X
            </button>

           </th>
        </tr>
      ))}
      <tr key="totalCartItems">
          <td></td>
          <td></td>
          <td></td>
          <td>{totalCartItems}</td>
          <td>{totalCartValue}</td>
           <th scope="col">



           </th>
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
