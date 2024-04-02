

import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import { ProductsPage } from './app/screens/productsPage';
import { OrdersPage } from './app/screens/ordersPage';
import { UserPage } from './app/screens/userPage';
import { HomePage } from './app/screens/homePage';
import { HomeNavbar } from './app/components/headers/HomeNavbar';
import { OtherNavbar } from './app/components/headers/OtherNavbar';
import { Footer } from './app/components/footer';
import '../css/app.css';

function App() {
  const location = useLocation();//bu biz qayerda turganimizni bildiradigan rooterdan oladi


  return(
  <>
      {location.pathname ==="/" ? <HomeNavbar /> : <OtherNavbar />}
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
      <Footer />
    </>
  );

}

export default App;
