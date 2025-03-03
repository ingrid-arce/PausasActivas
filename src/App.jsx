import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./appRoutes";


function App() {
  return (
    <Router>
    <div>
      <Header />
      <AppRoutes />
    </div>
    </Router>
  );
}

export default App;
