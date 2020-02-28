import React from 'react';
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

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/favorites">
            <FavoritesView />
          </Route>
          <Route path="/cart">
            <CartView />
          </Route>
          <Route path="/">
            <GroceryListView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
