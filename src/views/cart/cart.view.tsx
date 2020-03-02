import React from 'react';
import './cart.view.scss';

import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

function CartView(props: any) {
  console.log(props)
  return(
    <section className={'favorites-view'}>
      <div className={'list'}>
        <HorizontalCardList
          title={'Cart'}
          items={props.checkoutList}
          addItem={props.addItem}
          removeItem={props.removeItem}
        />
      </div>
    </section>
  )
}

export default CartView
