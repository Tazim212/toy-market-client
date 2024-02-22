/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main/Main.jsx';
import Home from './Components/SharedPage/Home/Home';
import LogIn from './Components/Submission/LogIn/LogIn';
import AuthProvider from './Provider/AuthProvider';
import Register from './Components/Submission/Register/Register';
import Blog from './Components/Pages/Blog/Blog';
import ErrorPage from './Components/Pages/Blog/ErrorPage/ErrorPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MyToys from './Components/Pages/MyToy/MyToys';
import AddToys from './Components/Pages/AddToys/AddToys';
import AllToys from './Components/Pages/AllToys/AllToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blogs',
        element: <Blog></Blog>
      },
      {
        path: 'addtoys',
        element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
      },
      {
        path: 'mytoys',
        element: <MyToys></MyToys>
      },
      {
        path: 'alltoys',
        element: <AllToys></AllToys>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
