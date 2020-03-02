import React, { useState, useEffect }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import GroceryListView from './views/grocery-list/groceryList.view';
import FavoritesView from './views/favorites/favorites.view';
import CartView from './views/cart/cart.view';

import NavigationRoutes from './shared/constants/navigation.routes';

import Product from './shared/models/product';

function App() {
  const [checkoutList, setCheckoutList] = useState([]);

  function onItemSelected(item: any) {
    console.log(item)
    let checkoutListCopy: any = checkoutList.slice();
    checkoutListCopy.push(item)
    setCheckoutList(checkoutListCopy);
    console.log(checkoutList);
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
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path={NavigationRoutes.getHomePath()}>
            <GroceryListView
              checkoutList={checkoutList}
              onItemSelected={onItemSelected}
              addItem={addItem}
              removeItem={removeItem}
            />
          </Route>
          <Route path={NavigationRoutes.getCartPath()}>
            <CartView
              checkoutList={checkoutList}
              onItemSelected={onItemSelected}
              addItem={addItem}
              removeItem={removeItem}
            />
          </Route>
          <Route exact path={NavigationRoutes.getFavoritesPath()}>
            <FavoritesView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
