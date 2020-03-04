import React, { useState, useRef, useCallback, useEffect } from 'react';
import './horizontalCardList.scss';

import CartSummary from '../cart-summary/cartSummary';
import HorizontalCard from '../horizontal-card/horizontalCard';


function HorizontalCardList(props: any) {
  const [totalAmount, setTotalAmount] = useState(0)
  const listItems = props.items.map((item: any) => {
    return(
      <HorizontalCard
        key={item.getId()}
        item={item}
        addItem={props.addItem}
        removeItem={props.removeItem}
      />
    );
  });

  // function getTotalAmount() {
  //   let totalAmount = 0;

  //   props.items.forEach((item: any) => {
  //     return totalAmount += item.getPrice();
  //   })

  //   setTotalAmount(totalAmount);
  // }

  // useEffect(() => {
  //   getTotalAmount();
  // }, [items, getTotalAmount])

  return(
    <div className={'horizontal-card-list'}>
      <div className={'summary-zone'}>
        <header className={'header'}>
          { props.title }
        </header>
        <CartSummary text={props.goToCartText} goToCart={props.goToCart} itemsOnCart={props.itemsOnCart}/>
        <div className={'content-wrapper'}>
          { listItems }
        </div>
      </div>
      <div className={'interaction-zone'}>
        <p className={'summary'}>Total amount: {props.checkoutTotalPrice}$</p>
        <a className={'button'} onClick={() => props.onItemsCheckout()}><strong>Checkout</strong></a>
      </div>
    </div>
  );
}

export default HorizontalCardList;
