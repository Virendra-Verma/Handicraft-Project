import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home';
import Statues from './components/Statues';
import Find from './components/Find';
import AddProduct from './components/AddProduct';
import ManageProducts from './components/ManageProduct';
import ListProduct from './components/ListProduct';
import Wall from './components/Wall';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Home/>}/>
      <Route element={<Statues />} />
      <Route element={<Wall />} />
      <Route element={<Find/>}  />
      <Route element={<AddProduct/>} />
      <Route element={<ManageProducts/>} />
      <Route element={<ListProduct/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
