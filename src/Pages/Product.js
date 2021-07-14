import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Fragment>
      <main>
        <h1>YO! Products</h1>
        <section>
          <ul>
            <li>
              <Link to="/product/p1"> P1</Link>
            </li>
            <li>
              <Link to="/product/p2">P2</Link>
            </li>
            <li>
              <Link to="/product/p3">P3</Link>
            </li>
          </ul>
        </section>
      </main>
    </Fragment>
  );
};
export default Product;
