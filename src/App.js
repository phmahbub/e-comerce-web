import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import { Children } from 'react';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import router from './utilities/Routes';

function App() {
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
