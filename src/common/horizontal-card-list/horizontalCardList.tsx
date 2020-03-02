import React, { useState, useEffect } from 'react';
import './horizontalCardList.scss';

import HorizontalCard from '../horizontal-card/horizontalCard';


function HorizontalCardList(props: any) {
  const [totalAmount, setTotalAmount] = useState(0);
  const listItems = props.items.map((item: any) => {
    return(
      <HorizontalCard
        key={item.id}
        item={item}
        addItemPrice={addToTotalCheckout}
        removeItemPrice={removeToTotalCheckout}
      />
    );
  });

  function addToTotalCheckout(amount: any) {
    // const currentAmount = totalAmount;
    
    setTotalAmount(totalAmount + amount);
  }

  function removeToTotalCheckout(amount: any) {
    setTotalAmount(totalAmount - amount);
  }

  useEffect(() => {
    let newTotalAmount = 0;
    props.items.forEach((item: any) => {
      newTotalAmount += item.price
    });
    setTotalAmount(newTotalAmount)
  }, [props.items]);

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
