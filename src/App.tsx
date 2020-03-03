import React, { useState }  from 'react';
import './App.css';

import AppRouter from './common/app-router/appRouter';

import Product from './shared/models/product';

function App(props: any) {
  const [checkoutList, setCheckoutList] = useState([]);

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

  return (
    <AppRouter
      items={checkoutList}
      onItemSelected={onItemSelected}
      addItem={addItem}
      removeItem={removeItem}
    />
  );
}

export default App;
