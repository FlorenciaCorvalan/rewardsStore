import React from "react";
import { Router } from "@reach/router";
import { UserProvider } from "./Context/UserContext"
import { RedeemedHistory } from "./pages/RedeemHistory";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <UserProvider>
      <Router>
        <RedeemedHistory exact path="/RedeemHistory" />
        

      </Router>
      
    </UserProvider>
  );
}

export default App;
