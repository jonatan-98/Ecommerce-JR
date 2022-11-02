import React, {useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    const { id } = useParams();

    const getProducts = async () => {
        try {
          const res = await fetch("https://fakestoreapi.com/products/" + id)
          const data = await res.json();
          setProduct(data);
        } catch {
          console.log("error");
        }
    };
      getProducts();


  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer