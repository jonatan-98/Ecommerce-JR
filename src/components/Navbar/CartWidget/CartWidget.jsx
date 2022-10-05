import React from 'react'
import styled from 'styled-components'
import { Icon } from '@iconify/react';

function CartWidget() {
  return (
      <Cart>
        <Icon icon="el:shopping-cart-sign" />
      </Cart>
  )
}

export default CartWidget

const Cart = styled.div`
    font-size: 50px;
    color: white;
`