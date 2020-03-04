import React, { useState, useEffect } from 'react';

import './groceryList.view.scss';

import VerticalCardList from '../../common/vertical-card-list/verticalCardList';
import HorizontalCardList from '../../common/horizontal-card-list/horizontalCardList';

import axios from 'axios';
import ApiRoutes from '../../shared/constants/api.routes';

import Product from '../../shared/models/product';
import ProductAsBack from '../../shared/models/productAsBack';

function GroceryListView() {
  const goToCartText = 'See my cart';
  const goToListText = 'Go back';
  const [list, setList] = useState([]);
  const [checkoutList, setCheckoutList] = useState([]);
  const [checkoutTotalPrice, setCheckoutTotalPrice] = useState(0);

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

  function onItemSelected(item: Product) {
    let checkoutListCopy: any = checkoutList.slice();
    checkoutListCopy.push(item)

    const elementAddedPreviously = checkoutList.find((checkoutItem: any) => checkoutItem.getId() === item.getId());
    
    if (elementAddedPreviously) {
      addItem(elementAddedPreviously)
      return
    }

    setCheckoutList(checkoutListCopy);
    setCheckoutTotalPrice(checkoutTotalPrice + item.getPrice());
  }

  function addItem(item: Product) {
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
    setCheckoutTotalPrice(checkoutTotalPrice + item.getPrice());
  }

  function removeItem(item: Product) {
    const MINIMUN_QUANTITY = 0;
    const quantitySelected = item.getQuantitySelected();

    let checkoutListCopy: any = checkoutList.slice();
    const itemToUpdateIndex = checkoutListCopy.findIndex((checkoutItem: any) => checkoutItem.getId() === item.getId());

    item.setQuantitySelected(quantitySelected - 1);
    setCheckoutTotalPrice(checkoutTotalPrice - item.getPrice());

    if (item.getQuantitySelected() <= MINIMUN_QUANTITY) {
      checkoutListCopy.splice(itemToUpdateIndex, 1);
      setCheckoutList(checkoutListCopy);
      item.setQuantitySelected(1);
      return;
    }

    checkoutListCopy[itemToUpdateIndex] = item;
    setCheckoutList(checkoutListCopy);
  }

  async function onItemsCheckout() {
    checkoutList.forEach(async (checkoutElement: any) => {
      let url = ApiRoutes.getGroceryListURL();
      url = url + '/' + checkoutElement.getId();
      const productAsBack = new ProductAsBack(
        checkoutElement.getId(),
        checkoutElement.getImageUrl(),
        checkoutElement.getStock(),
        checkoutElement.getProductName(),
        checkoutElement.getPrice(),
        checkoutElement.getProductDescription(),
        checkoutElement.getFavorite(),
        checkoutElement.getQuantitySelected()
      )
      await axios.patch(url, {
        ...productAsBack.buildDTO()
      });
    });
    
    await fetchGroceryList();
    setCheckoutList([]);
    setCheckoutTotalPrice(0);
  }

  function goToCart() {
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
          goToCartText={goToCartText}
          goToCart={goToCart}
          itemsOnCart={checkoutList.length}
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
          goToCartText={goToListText}
          goToCart={goToCart}
          itemsOnCart={checkoutList.length}
          onItemsCheckout={onItemsCheckout}
          checkoutTotalPrice={checkoutTotalPrice}
        />
      </div>
    </section>
  )
}

export default GroceryListView
