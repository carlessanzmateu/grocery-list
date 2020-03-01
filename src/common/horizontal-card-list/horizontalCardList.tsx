import React, { useState, useEffect } from 'react';
import './horizontalCardList.scss';

import HorizontalCard from '../horizontal-card/horizontalCard';


function HorizontalCardList(props: any) {
  let initialTotalAmount = 0;
  const [totalAmount, setTotalAmount] = useState(0);
  const listItems = props.items.map((item: any) => {
    initialTotalAmount += item.price;
    return(
      <HorizontalCard
        key={item.id}
        item={item}
        addItemPrice={addToTotalCheckout}
      />
    );
  });

  function addToTotalCheckout(amount: any) {
    const currentAmount = totalAmount;
    
    setTotalAmount(currentAmount + amount);
  }

  return(
    <div className={'horizontal-card-list'}>
      <header className={'header'}>
        { props.title }
      </header>
      <div className={'content-wrapper'}>
        { listItems }
      </div>
      <div className={'interaction-zone'}>
        <p className={'summary'}>Total amount: {totalAmount}$</p>
        <a className={'button'}>Checkout</a>
      </div>
    </div>
  );
}

export default HorizontalCardList;
