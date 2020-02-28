import React from 'react';
import './groceryList.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';
import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

function GroceryListView() {
  return(
    <section className={'grocery-list-view'}>
      <div className={'list'}>
        <VerticalCardList title={'List'}/>
      </div>
      <div>
        <HorizontalCardList title={'Cart'}/>
      </div>
    </section>
  )
}

export default GroceryListView
