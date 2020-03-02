import React, { useState, useEffect } from 'react';

import './groceryList.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';
import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

import axios from 'axios';
import ApiRoutes from '../../shared/constants/api.routes';

function GroceryListView(props: any) {
  const [list, setList] = useState([]);
  const [checkoutList, setCheckoutList] = useState([]);

  async function fetchGroceryList() {
    const url = ApiRoutes.getGroceryListURL();
    const groceryList: any = await axios.get(url);
    setList(groceryList.data);
  }

  async function onItemAddedToFavorite(item: any) {
    let url = ApiRoutes.getGroceryListURL();
    url = url + '/' + item.id
    if (item.favorite === '0') {
      item.favorite = '1';
    } else {
      item.favorite = '0';
    }
    await axios.patch(url, {
      ...item
    });

    await fetchGroceryList();
  }

  function onItemSelected(item: any) {
    let checkoutListCopy: any = checkoutList.slice();
    checkoutListCopy.push(item)
    setCheckoutList(checkoutListCopy);
  }

  useEffect(() => {
    fetchGroceryList();
  }, []);

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
      <div className={'cart'}>
        <HorizontalCardList 
          title={'Cart'}
          items={checkoutList}
        />
      </div>
    </section>
  )
}

export default GroceryListView
