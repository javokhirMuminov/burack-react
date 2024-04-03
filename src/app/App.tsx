import React from 'react';
import '../css/app.css';
import { Box, Container, Stack } from '@mui/system';
import { Link,  Typography } from '@mui/material';
import { Button } from '@mui/base';
import { ProductsPage } from './screens/productsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomePage } from './screens/homePage';



function App() {
  return (
  <>

    <Switch>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/orders">
        <OrdersPage />
      </Route>
      <Route path="/member-page">
        <UserPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    </>

  );
}

export default App;
