import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './cartSlice'
import styles from './Cart.module.css'

const Cart = () => {
  const count = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  return (
    <div className={styles.counter}>
      <div>
        ------CART-----
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Cart