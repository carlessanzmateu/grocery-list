import React, { useState, useEffect } from 'react';

import './groceryList.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';
import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

import axios from 'axios';
import ApiRoutes from '../../shared/constants/api.routes';

import Product from '../../shared/models/product';

function GroceryListView(props: any) {
  const [list, setList] = useState([]);
  const [checkoutList, setCheckoutList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  async function fetchGroceryList() {
    const url = ApiRoutes.getGroceryListURL();
    const groceryList: any = await axios.get(url);
    setList(groceryAssembler(groceryList.data));
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

  function onItemSelected(item: any) {
    let checkoutListCopy: any = checkoutList.slice();
    checkoutListCopy.push(item)
    setCheckoutList(checkoutListCopy);
  }

  function addItem(item: any) {
    const productStock = item.getStock();
    const quantitySelected = item.getQuantitySelected();

    if (quantitySelected >= productStock) {
      return item;
    }

    item.setQuantitySelected(quantitySelected + 1);
    
    let checkoutListCopy: any = checkoutList.slice();

    const itemToUpdateIndex = checkoutListCopy.findIndex((checkoutItem: any) => checkoutItem.getId() === item.getId());
    checkoutListCopy[itemToUpdateIndex] = item;
    setCheckoutList(checkoutListCopy);
  }

  function removeItem(item: Product) {
    const MINIMUN_QUANTITY = 0;
    const quantitySelected = item.getQuantitySelected();

    let checkoutListCopy: any = checkoutList.slice();
    const itemToUpdateIndex = checkoutListCopy.findIndex((checkoutItem: any) => checkoutItem.getId() === item.getId());

    item.setQuantitySelected(quantitySelected - 1);

    if (item.getQuantitySelected() <= MINIMUN_QUANTITY) {
      checkoutListCopy.splice(itemToUpdateIndex, 1);
      setCheckoutList(checkoutListCopy);
      return;
    }

    checkoutListCopy[itemToUpdateIndex] = item;
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
          addItem={addItem}
          removeItem={removeItem}
        />
      </div>
    </section>
  )
}

export default GroceryListView
