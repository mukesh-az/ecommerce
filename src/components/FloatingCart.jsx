import SingleCartItem from "./SingleCartItem"
import Button from "../components/Button"
import { useGlobalContext } from "../context/context"
const FloatingCart = ({ className }) => {
  const { state } = useGlobalContext()
  return (
    <FloatingCartWrapper className={className}>
      <header>
        <p>Cart</p>
      </header>
      <div className="divider"></div>
      <ul className="cart-items">
        {state.cart.length > 0 ? (
          state.cart.map((cartItem) => {
            return <SingleCartItem key={cartItem.productId} {...cartItem} />
          })
        ) : (
          <p className="empty">Your cart is empty.</p>
        )}
        {state.cart.length > 0 && <Button>Checkout</Button>}
      </ul>
    </FloatingCartWrapper>
  )
}

export default FloatingCart
