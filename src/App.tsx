import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import axios from 'axios';
import ApiRoutes from './shared/constants/api.routes';


import GroceryListView from './views/grocery-list/groceryList.view';
import FavoritesView from './views/favorites/favorites.view';
import CartView from './views/cart/cart.view';

import NavigationRoutes from './shared/constants/navigation.routes';

function App() {
  const [list, setList] = useState([]);

  async function fetchGroceryList() {
    const url = ApiRoutes.getGroceryListURL();
    const groceryList: any = await axios.get(url);
    setList(groceryList.data)
  }

  useEffect(() => {
    fetchGroceryList();
  }, [])

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
          <Route path={NavigationRoutes.getHomePath()}>
            <GroceryListView list={list}/>
          </Route>
          <Route path={NavigationRoutes.getCartPath()}>
            <CartView />
          </Route>
          <Route path={NavigationRoutes.getFavoritesPath()}>
            <FavoritesView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
