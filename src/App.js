import React from "react";
import RedeemedHistory  from "./pages/RedeemHistory";
import HomePage from "./pages/HomePage";
import Header from "./Components/Header";
import Points from "./pages/Points";
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
          <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/redeem-history" component={RedeemedHistory} />
              <Route exact path="/add-coins" component={Points} />
            </Switch>
          </FilterProvider>
        </ProductProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
