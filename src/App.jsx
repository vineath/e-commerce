import Header from "./components/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/home.jsx";
import React from "react";


function App() {
  return(
    // <div>
    //   <Header/>
    //   <Footer/>
    // </div>        
    // //    This have unnessary div wrapper which can be avoided using React Fragment. React Fragment is a common pattern in React that allows you to group a list of children without adding extra nodes to the DOM.
    
    // <React.Fragment>         //
    //   <Header/>
    //   <Footer/>
    // </React.Fragment>

    // Above thing can also be written as
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  );                          
}

export default App
