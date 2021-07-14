import { Route } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
      <Route path="/product-detail/:productId">
        <ProductDetail />
      </Route>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
