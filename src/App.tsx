import React, { useState }  from 'react';
import axios from 'axios';
import './App.css';

import AppRouter from './common/app-router/appRouter';

import Product from './shared/models/product';
import ProductAsBack from './shared/models/productAsBack';

import ApiRoutes from './shared/constants/api.routes';

function App(props: any) {
  return (
    <AppRouter />
  );
}

export default App;
