import React, { useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer(props) {

  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const productos = await data.json()
    setProducts(productos)
  }
  return (
    <>
      <div>{props.greeting}</div>
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer