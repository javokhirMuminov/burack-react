import React from 'react';
import '../css/app.css';
import { Box, Container, Stack } from '@mui/system';
import { Link, Switch, Typography } from '@mui/material';
import { Button } from '@mui/base';
import { ProductsPage } from './screens/productsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { Router } from 'react-router';


function App() {
  return (
    <div>

      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page">UserPage</Link>
          </li>
          <li>
            <Link to="/helpPage">HelpPage</Link>
          </li>
        </ul>
      </nav>



       <Switch>
      <Router path="/products">
          <ProductsPage />
      </Router>
      <Router path="/orders">
          <OrdersPage />
      </Router>
      <Router path="/member-page">
          <UserPage />
      </Router>
    </Switch>
    </div>

  );
}

export default App;
