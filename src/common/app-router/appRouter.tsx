import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import GroceryListView from '../../views/grocery-list/groceryList.view';
import FavoritesView from '../../views/favorites/favorites.view';
import CartView from '../../views/cart/cart.view';

import NavigationRoutes from '../../shared/constants/navigation.routes';

function AppRouter(props: any) {
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
                items={props.items}
                onItemSelected={props.onItemSelected}
                addItem={props.addItem}
                removeItem={props.removeItem}
              />
            </Route>
            <Route path={NavigationRoutes.getCartPath()}>
              <CartView
                items={props.items}
                onItemSelected={props.onItemSelected}
                addItem={props.addItem}
                removeItem={props.removeItem}
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

export default AppRouter;