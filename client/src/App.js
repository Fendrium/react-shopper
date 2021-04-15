import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import Home from './pages/Home';
import Product from './pages/Product';
import Result from './pages/Result';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';

const queryClient = new QueryClient();

const stripePromise = loadStripe(
  'pk_test_51IgNXSAPxg5sh2dxe5T5kgflhkD5mZOvYF9H5Z0vxtbot5z9OAfChc2M0asVO0Y7tbrR1KoVy7gv4Tdb0LZdPrEk00HOqjAyU3'
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode="checkout-session"
        stripe={stripePromise}
        currency="USD"
      >
        <BrowserRouter>
          <Toaster position="bottom-center" />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/result" component={Result} />
            <Route path="/:productId" component={Product} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
