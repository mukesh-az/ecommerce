import { Main } from "./layout/index"
import Layout from "./layout/layout"
import  Products from "./components/Products"
import   ProductInfo from "./components/ProductInfo"
import ShoppingCart from "./components/ShoppingCart"
import  Home from "./layout/home"
import NoMatch from "./layout/NoMatch"
import { useGlobalContext } from "./context/context"
import { Routes, Route } from "react-router-dom";
function App() {

  return (
<div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductInfo />} />
           <Route path="cart" element={<ShoppingCart />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
     </div>
  )
}


export default App
