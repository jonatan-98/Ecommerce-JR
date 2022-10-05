import React from "react";
import "./App.css";
import ItemListContainer from "./components/Navbar/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar"

function App() {
  const mensaje = "Las mejores ofertas"
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={mensaje}/>
    </>
  );
}

export default App;
