import React from "react";
import { RedeemedHistory } from "./pages/RedeemHistory";
import HomePage from "./pages/HomePage";
import { UserProvider } from "./Context/UserContext";
import { ProductProvider } from "./Context/ContextProducts";
import { FilterProvider } from "./Context/ContextFilter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <UserProvider>
        <ProductProvider>
          <FilterProvider>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/redeem-history" component={RedeemedHistory} />
            </Switch>
          </FilterProvider>
        </ProductProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
