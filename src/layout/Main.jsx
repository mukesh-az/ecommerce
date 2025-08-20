import styled from "styled-components"
import Counter from "../features/counter/Counter"
import Cart from "../features/cart/cart"
import Home from "./home"
const Main = () => {
  return (
    <MainWrapper>

      <Cart />
      <Counter />
      Hello-MAIN--
      <Home  />
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  max-width: 111rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

export default Main
