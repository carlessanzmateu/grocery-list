import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../shared/contexts/CartContext';

import './groceryList.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';
import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

import axios from 'axios';
import ApiRoutes from '../../shared/constants/api.routes';

import Product from '../../shared/models/product';

function GroceryListView(props: any) {
  const [list, setList] = useState([]);
  async function fetchGroceryList() {
    const url = ApiRoutes.getGroceryListURL();
    const groceryList: any = await axios.get(url);
    setList(groceryAssembler(groceryList.data));
  }

  async function onItemAddedToFavorite(item: any) {
    let url = ApiRoutes.getGroceryListURL();
    url = url + '/' + item.getId();
    if (item.getFavorite() === '0') {
      item.setFavorite('1');
    } else {
      item.setFavorite('0');
    }
    await axios.patch(url, {
      ...item
    });

    await fetchGroceryList();
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
    fetchGroceryList();
  }, []);

  // console.log(useContext(CartContext))

  return(
    <section className={'grocery-list-view'}>
      <div className={'list'}>
        <VerticalCardList 
          items={list} 
          title={'List'} 
          onItemSelected={props.onItemSelected}
          onItemAddedToFavorite={onItemAddedToFavorite}
        />
      </div>
      <div className={'cart'}>
        <HorizontalCardList 
          title={'Cart'}
          items={props.items}
          addItem={props.addItem}
          removeItem={props.removeItem}
        />
      </div>
    </section>
  )
}

export default GroceryListView
