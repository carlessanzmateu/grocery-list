import React from 'react';

import './cart.view.scss';

import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

function CartView(props: any) {
  return(
    <section className={'favorites-view'}>
      <div className={'list'}>
        <HorizontalCardList
          title={'Cart'}
          items={props.items}
          addItem={props.addItem}
          removeItem={props.removeItem}
        />
      </div>
    </section>
  )
}

export default CartView
