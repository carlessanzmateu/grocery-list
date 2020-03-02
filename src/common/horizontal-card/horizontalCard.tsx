import React, { useState } from 'react';
import './horizontalCard.scss';

function HorizontalCard(props: any) {
  function addItem() {
    props.addItem(props.item);
  }

  function removeItem() {
    props.removeItem(props.item);
  }

  return(
    <div className={'horizontal-card'}>
      <img 
        className={'image'}
        src={props.item.getImageUrl()} 
      />
      <div className={'card-information'}>
        <h3 className={'title'}><strong>{props.item.getProductName()}</strong></h3>
        <div className={'buy-info'}>
          <a className={'add-item'} onClick={addItem}>+</a>
          <span className={'products-left'}>{props.item.getQuantitySelected()}</span>
          <a className={'remove-item'} onClick={removeItem}>-</a>
        </div>
      </div>
      <div className={'amount'}>{props.item.getQuantitySelected() * props.item.getPrice()}$</div>
    </div>
  );
}

export default HorizontalCard
