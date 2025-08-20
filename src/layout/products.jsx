import styled from "styled-components"

import ProductInfo from "../components/ProductInfo"
import { productImages, productThumbnails } from "../assets/imagedata"
import { data } from "../utils/data"

const Products = () => {
  return (
 <ProductWrapper>
      <ProductInfo {...data} />
 </ProductWrapper>
  )
}


const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    margin-top: 5rem;
  }

  @media only screen and (min-width: 1000px) {
    margin-top: 9rem;
    gap: 5rem;
    display: grid;
    grid-template-columns: 44.5rem 44.5rem;
  }

  @media only screen and (min-width: 1200px) {
    gap: 11rem;
  }
`

export default Products