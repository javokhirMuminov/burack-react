import React from 'react';
import '../css/app.css';
import { Box, Container, Stack } from '@mui/system';
import { Switch, Typography } from '@mui/material';
import { Button } from '@mui/base';
import { ProductsPage } from './screens/productsPage';
import { OrdersPage } from './screens/ordersPage';
import { UsersPage } from './screens/userPage';
import { Router } from 'react-router';


function App() {
  return(
  <>
    <Switch>
      <Router path="/products">
          <ProductsPage />
      </Router>
      <Router path="/orders">
          <OrdersPage />
      </Router>
      <Router path="/member-page">
          <UsersPage />
      </Router>
    </Switch>

  </>
  );
}

export default App;
