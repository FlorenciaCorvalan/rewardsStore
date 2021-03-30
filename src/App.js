import React from "react";
import { RedeemedHistory } from "./pages/RedeemHistory";
import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  

  return (
  
      
      <Router>
      
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/redeem-history" component={RedeemedHistory} />
        </Switch>
     
      </Router>
    
  );
}

export default App;