import React from 'react';
import './verticalCardList.scss';

import CartSummary from '../cart-summary/cartSummary';
import VerticalCard from '../vertical-card/verticalCard';


function VerticalCardList(props: any) {
  const listItems = props.items.map((item: any) => {
    return(
      <VerticalCard 
        key={item.getId()}
        item={item}
        onItemSelected={props.onItemSelected}
        onItemAddedToFavorite={props.onItemAddedToFavorite}
      />
    );
  })

  return(
    <div className={'vertical-card-list'}>
      <header className={'header'}>
        { props.title }
      </header>
      <CartSummary text={props.goToCartText} goToCart={props.goToCart} itemsOnCart={props.itemsOnCart}/>
      <div className={'content-wrapper'}>
        { listItems }
      </div>
    </div>
  );
}

export default VerticalCardList;
