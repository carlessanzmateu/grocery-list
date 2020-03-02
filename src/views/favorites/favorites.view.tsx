import React, { useState, useEffect } from 'react';
import './favorites.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';

import axios from 'axios';
import ApiRoutes from '../../shared/constants/api.routes';

function FavoritesView() {
  const [list, setList] = useState([]);
  const [checkoutList, setCheckoutList] = useState([]);

  async function fetchFavoriteList() {
    const url = ApiRoutes.getFavouriteListURL();
    const groceryList: any = await axios.get(url);
    setList(groceryList.data);
  }

  function onItemSelected(item: any) {
    let checkoutListCopy: any = checkoutList.slice();
    checkoutListCopy.push(item)
    setCheckoutList(checkoutListCopy);
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

    await fetchFavoriteList();
  }

  useEffect(() => {
    fetchFavoriteList();
  }, [])

  return(
    <section className={'favorites-view'}>
      <div className={'list'}>
        <VerticalCardList 
          title={'Favorites'}
          items={list}
          onItemSelected={onItemSelected}
          onItemAddedToFavorite={onItemAddedToFavorite}
        />
      </div>
    </section>
  )
}

export default FavoritesView
