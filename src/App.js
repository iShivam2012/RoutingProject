import { Route } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import Product from "./Components/Product";
import Welcome from "./Components/Welcome";

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
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
