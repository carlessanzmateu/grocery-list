import React, { useState, useEffect } from 'react';
import './favorites.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';

import axios from 'axios';
import ApiRoutes from '../../shared/constants/api.routes';

function FavoritesView() {
  const [list, setList] = useState([]);

  async function fetchFavoriteList() {
    const url = ApiRoutes.getFavouriteListURL();
    const groceryList: any = await axios.get(url);
    setList(groceryList.data);
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
        />
      </div>
    </section>
  )
}

export default FavoritesView
