import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <main>
        <h1>Welcome</h1>
        <Route path="/welcome/new-user">
          <p>YOkosooo! temheraa!!</p>
        </Route>
      </main>
    </section>
  );
};
export default Welcome;
