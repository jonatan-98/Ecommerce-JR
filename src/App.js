import React from "react";
import "./App.css";
import ItemListContainer from "./containers/ItemListContainer";
import Navbar from "./components/Navbar/Navbar"
import ItemDetailContainer from "./containers/ItemDetailContainer";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const mensaje = "Las mejores ofertas"
  return (
    
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/categoria/:id" element={<ItemDetailContainer />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
          <Route path="*" element={<ItemListContainer greeting={mensaje}/>}/>

          
        </Routes>
        
      </BrowserRouter>

    
  );
}

export default App;
