import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
