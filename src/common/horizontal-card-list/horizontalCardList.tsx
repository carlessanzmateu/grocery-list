import React from 'react';
import './horizontalCardList.scss';

import CartSummary from '../cart-summary/cartSummary';
import HorizontalCard from '../horizontal-card/horizontalCard';


function HorizontalCardList(props: any) {
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
