import React from 'react';
import './favorites.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';

function FavoritesView() {
  return(
    <section className={'favorites-view'}>
      <div className={'list'}>
        <VerticalCardList title={'Favorites'}/>
      </div>
    </section>
  )
}

export default FavoritesView
