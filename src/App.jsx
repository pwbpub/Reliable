import React from "react";
import Nav from "./comp/Nav";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import "./App.css";


const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Home />
        <Services />
        <Contact />
      </main>
    </div>
  );
};
export default App;