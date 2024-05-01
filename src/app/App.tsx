import React, { useState } from 'react';
import { Box, Container, Stack } from '@mui/system';
import { Link,  Typography } from '@mui/material';
import { Button } from '@mui/base';
import  ProductsPage  from './screens/productsPage';
import  OrdersPage  from './screens/ordersPage';
import  UserPage  from './screens/userPage';
import { Route, BrowserRouter as Router, Switch, useLocation } from 'react-router-dom';
import  HomePage  from './screens/homePage';
import  HomeNavbar  from './components/headers/HomeNavbar';
import  OtherNavbar  from './components/headers/OtherNavbar';
import  Footer  from './components/footer';
import '../css/app.css';
import "../css/footer.css";
import "../css/navbar.css";
import  HelpPage  from './screens/helpPage';
import { CartItem } from '../lib/types/search';
import useBasket from './hooks/useBasket';
import AuthenticationModal from './components/auth';


function App() {
  const location = useLocation();/*buyerda biz qaysi pagesda turganimizni aniqlayapmiz*/
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll} = useBasket();

    const  [signupOpen, setSignupOpen] = useState<boolean>(false);
    const [loginOpen, setLoginOpen] = useState<boolean>(false);


    /**HANDLERS */
    const handleSignupClose = () => setSignupOpen(false);
    const handleLoginClose = () => setLoginOpen(false);

  return (
  <>
    {location.pathname === "/" ?
    <HomeNavbar
    onAdd = {onAdd}
    cartItems = {cartItems}
    onRemove = {onRemove}
    onDelete = {onDelete}
    onDeleteAll ={onDeleteAll}/>
    :
    <OtherNavbar
    onAdd = {onAdd}
    cartItems = {cartItems}
    onRemove = {onRemove}
    onDelete = {onDelete}
    onDeleteAll ={onDeleteAll}
    />}

    <Switch>
      <Route path="/products">
        <ProductsPage onAdd={onAdd} />
      </Route>
      <Route path="/orders">
        <OrdersPage />
      </Route>
      <Route path="/member-page">
        <UserPage />
      </Route>
      <Route path="/help">
        <HelpPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    <Footer/>


    <AuthenticationModal
    signupOpen={signupOpen}
    loginOpen ={loginOpen}
    handleLoginClose={handleLoginClose}
    handleSignupClose={handleSignupClose}
    />
    </>

  );
}

export default App;
