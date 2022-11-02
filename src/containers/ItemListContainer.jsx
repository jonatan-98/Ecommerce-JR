import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams} from "react-router-dom";

function ItemListContainer(props) {

  const [products, setProducts] = useState([])

  const { category } = useParams();

  useEffect(() => {
    obtenerCategoria();
    console.log("inicio2")
  },[category])
  
  const obtenerCategoria = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const productos2 = await data.json()
    setProducts(productos2)
    console.log(productos2);
  }

  useEffect(() => {
    obtenerDatos()
    console.log("inicio");
  },[])

  const obtenerDatos = async () => {
    const data = await fetch(`https://fakestoreapi.com/products`)
    const productos = await data.json()
    setProducts(productos)
    console.log(productos);
  }

  return (
    <>
      <div>{props.greeting}</div>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer