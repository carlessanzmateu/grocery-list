import React, { useState, useEffect } from 'react';
import './favorites.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';

import axios from 'axios';
import ApiRoutes from '../../shared/constants/api.routes';

import Product from '../../shared/models/product';
import ProductAsBack from '../../shared/models/productAsBack';

function FavoritesView() {
  const [list, setList] = useState([]);
  const [checkoutList, setCheckoutList] = useState([]);

  async function fetchFavoriteList() {
    const url = ApiRoutes.getFavouriteListURL();
    const groceryList: any = await axios.get(url);
    setList(groceryAssembler(groceryList.data));
  }

  function onItemSelected(item: any) {
    let checkoutListCopy: any = checkoutList.slice();
    checkoutListCopy.push(item)
    setCheckoutList(checkoutListCopy);
  }

  async function onItemAddedToFavorite(item: any) {
    let url = ApiRoutes.getGroceryListURL();
    url = url + '/' + item.getId();
    if (item.getFavorite() === '0') {
      item.setFavorite('1');
    } else {
      item.setFavorite('0');
    }
    const productAsBack = new ProductAsBack(
      item.getId(),
      item.getImageUrl(),
      item.getStock(),
      item.getProductName(),
      item.getPrice(),
      item.getProductDescription(),
      item.getFavorite(),
      item.getQuantitySelected()
    )
    productAsBack.setQuantitySelected(0);
    await axios.patch(url, {
      ...productAsBack.buildDTO()
    });

    await fetchFavoriteList();
  }

  function groceryAssembler(groceryList: any) {
    return groceryList.map((groceryItem: any) => {
      return new Product(
        groceryItem.id,
        groceryItem.image_url,
        groceryItem.stock,
        groceryItem.productName,
        groceryItem.price,
        groceryItem.productDescription,
        groceryItem.favorite,
        1
      )
    })
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
