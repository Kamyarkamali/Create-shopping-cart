import React from 'react';

import ProductsContextProvider from './context/ProductscontextProvider';

import {Switch,Route,Redirect}from "react-router-dom";
//Components
import Store from './Components/Store';
import ProdouctDetailes from './Components/ProdouctDetailes';
import Navbar from './Components/shared/Navbar';
import ShopingCart from "./Components/ShopingCart";

//Context
import CartContextProvider from './context/CartContextProvider';

const App = () => {
  return (
    <div>
        <ProductsContextProvider>
          <CartContextProvider>
            <Navbar/>
          <Switch>
            <Route path="/products/:id" component={ProdouctDetailes} />
            <Route path="/products" component={Store}/>
            <Route path="/cart" component={ShopingCart}/>
            <Redirect to="/products"/>
          </Switch>
          </CartContextProvider>
        </ProductsContextProvider>
    </div>
  );
};

export default App;