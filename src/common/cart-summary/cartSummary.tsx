import React from 'react';
import './cartSummary.scss';

function CartSummary(props: any) {
  return(
    <div className={'cart-summary'} onClick={props.goToCart}>
      <strong>{props.text} ({props.itemsOnCart})</strong>
    </div>
  );
}

export default CartSummary;
