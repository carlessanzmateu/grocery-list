import React from 'react';

import './groceryList.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';
import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

function GroceryListView(props: any) {
  const elementsToLoad = 25;
  let fetchedList: any;
  console.log(props.list);

  function onItemSelected(value: any) {
    console.log('selected', value)
  }

  function onItemAddedToFavorite(value: any) {
    console.log('favorite', value)
  }

  return(
    <section className={'grocery-list-view'}>
      <div className={'list'}>
        <VerticalCardList 
          items={props.list} 
          title={'List'} 
          onItemSelected={onItemSelected}
          onItemAddedToFavorite={onItemAddedToFavorite}
        />
      </div>
      <div>
        <HorizontalCardList title={'Cart'}/>
      </div>
    </section>
  )
}

export default GroceryListView
