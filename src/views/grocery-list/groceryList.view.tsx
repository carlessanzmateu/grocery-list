import React, { useState } from 'react';
import axios from 'axios';

import './groceryList.view.scss';

import ApiRoutes from '../../shared/constants/api.routes';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';
import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

function GroceryListView() {
  const [list, setList] = useState(['a', 'b', 'c', 'd', 'f', 'g', 'h']);
  const elementsToLoad = 25;

  async function fetchGroceryList() {
    const url = ApiRoutes.getGroceryListURL();
    const groceryList: any = await axios.get(url);
  }

  function onItemSelected(value: any) {
    console.log('selected', value)
  }

  function onItemAddedToFavorite(value: any) {
    console.log('favorite', value)
  }

  fetchGroceryList();

  return(
    <section className={'grocery-list-view'}>
      <div className={'list'}>
        <VerticalCardList 
          items={list} 
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
