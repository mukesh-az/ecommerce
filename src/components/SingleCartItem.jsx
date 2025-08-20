import { Delete } from "../icons"
import { useGlobalContext } from "../context/context"

const SingleCartItem = ({
  productId,
  productName,
  productPrice,
  isOnSale,
  salePercent,
  amount,
  images,
}) => {
  const { removeItem } = useGlobalContext()

  const actualPrice = isOnSale
    ? (productPrice * salePercent).toFixed(2)
    : productPrice.toFixed(2)

  const totalPrice = (actualPrice * amount).toFixed(2)

  return (
    <SingleItemWrapper>
      <img src={images[0].url} alt={images[0].alt} />
      <div className="item-info">
        <p className="name">{productName}</p>
        <p className="total">
          ${actualPrice}
          &nbsp;x&nbsp;{amount}&nbsp;
          <span>${totalPrice}</span>
        </p>
      </div>
      <button onClick={() => removeItem(productId)}>
        <Delete />
      </button>
    </SingleItemWrapper>
  )
}


export default SingleCartItem
