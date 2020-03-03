import React, { useContext } from 'react';
// import CartContext from '../../shared/contexts/CartContext';

import './cart.view.scss';

import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

function CartView(props: any) {
  // console.log(useContext(CartContext))
  return(
    <section className={'favorites-view'}>
      <div className={'list'}>
        <HorizontalCardList
          title={'Cart'}
          // items={useContext(CartContext)}
          items={props.items}
          addItem={props.addItem}
          removeItem={props.removeItem}
        />
      </div>
    </section>
  )
}

export default CartView
