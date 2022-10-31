import React from 'react'
import { Icon } from '@iconify/react';

function CartWidget() {
  return (
      <div style={style.divIcon}>
        <Icon icon="el:shopping-cart-sign" style={style.icon} />
      </div>
      
  )
}

export default CartWidget

const style = {
  icon:{
    width:"100%",
    height:"100%",
    color:"white",
  },
  divIcon:{
    width:50,
    height:50,
  }
}