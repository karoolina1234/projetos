import React from 'react';

import Home from './pages/home';
import {Provider} from 'react-redux'
import { store } from './reducer/store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from './pages/cart';

function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartPage/>}/>

    </Routes>
    </BrowserRouter>
   </Provider>
  );
}

export default App;
