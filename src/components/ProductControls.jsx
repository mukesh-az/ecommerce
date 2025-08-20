import { Plus, Minus, Cart } from "../icons/index"
import Button from "./Button"
import { useGlobalContext } from "../context/context"
import { data } from "../utils/data"
const ProductControls = ({ productId }) => {
  const { increaseAmount, decreaseAmount, removeItem, addToCart, state } =
    useGlobalContext()

  return (
    <ControlsWrapper>
      <div className="inner-controls">
        <button
          onClick={() => {
            decreaseAmount(productId)
          }}
        >
          <Minus />
        </button>
        <span className="amount">{state.amount}</span>
        <button
          onClick={() => {
            increaseAmount(productId)
          }}
        >
          <Plus />
        </button>
      </div>
      <Button
        className="cart"
        func={() => {
          addToCart(state.amount, data)
        }}
        color={"#FFFFFF"}
      >
        <Cart />
        Add to Cart
      </Button>
    </ControlsWrapper>
  )
}


export default ProductControls
