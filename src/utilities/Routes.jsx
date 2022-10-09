import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Cart from '../components/Cart';
import ErrorPage from '../components/ErrorPage';
import Root from '../components/Root';
import Shop from '../components/Shop';
import Loaders from '../Loaders/Loaders';

const router = createBrowserRouter([
    {
      path:'/', element:<Root/>,
      errorElement:<ErrorPage/>,
      loader:Loaders,
      children:[
        {path:'/shop', element:<Shop/>},
        {path:'/cart', element:<Cart/>},
        
      ]
    }
  ])

export default router;