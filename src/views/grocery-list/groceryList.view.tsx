import React from 'react';
import './groceryList.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';
import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

function GroceryListView() {
  const mockItems = ['a', 'b', 'c', 'd', 'f', 'g', 'h']

  function onItemSelected(value: any) {
    console.log('Foo', value)
  }

  return(
    <section className={'grocery-list-view'}>
      <div className={'list'}>
        <VerticalCardList items={mockItems} title={'List'} onItemSelected={onItemSelected}/>
      </div>
      <div>
        <HorizontalCardList title={'Cart'}/>
      </div>
    </section>
  )
}

export default GroceryListView
