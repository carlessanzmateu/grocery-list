import React from 'react';
import './cart.view.scss';

import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

function FavoritesView() {
  return(
    <section className={'favorites-view'}>
      <div className={'list'}>
        <HorizontalCardList title={'Cart'}/>
      </div>
    </section>
  )
}

export default FavoritesView
