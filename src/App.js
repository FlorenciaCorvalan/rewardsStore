import React from "react";
import { Router } from "@reach/router";
import { UserProvider } from "./Context/UserContext"


function App() {
  return (
    <UserProvider>
      
      <p>hola</p>
      
    </UserProvider>
  );
}

export default App;
