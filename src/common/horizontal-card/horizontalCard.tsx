import React, { useState } from 'react';
import './horizontalCard.scss';

function HorizontalCard(props: any) {
  const initialQuantity: number = 1;
  const [quantity, setQuantity] = useState(initialQuantity);
  let totalPrice = props.item.price * quantity;

  function addItem() {
    // let quantityCopy = quantity;
    // if (quantityCopy >= props.item.stock) {
    //   return;
    // }

    // ++quantityCopy;

    // setQuantity(quantityCopy);
    props.addItemPrice(props.item.price);
  }

  function removeItem() {
    // const MINIMUM_QUANTITY = 0;
    // let quantityCopy = quantity;

    // if (quantityCopy <= MINIMUM_QUANTITY) {
    //   return;
    // }

    // quantityCopy -= 1;

    // setQuantity(quantityCopy);
    props.removeItemPrice(props.item.price);
  }

  return(
    <div className={'horizontal-card'}>
      <img 
        className={'image'}
        src={props.item.image_url} 
      />
      <div className={'card-information'}>
        <h3 className={'title'}><strong>{props.item.productName}</strong></h3>
        <div className={'buy-info'}>
          <a onClick={addItem}>+</a>
          <span className={'products-left'}>{quantity}</span>
          <span onClick={removeItem}>-</span>
        </div>
      </div>
      <div className={'amount'}>{totalPrice}$</div>
    </div>
  );
}

export default HorizontalCard
