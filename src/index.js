import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import {Provider} from 'react-redux';

import App from './App';
import Users from './components/Users';
import Posts  from './components/Posts';
import Comments from './components/Сomments';
import { HomePage } from './components/HomePage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '',
    element: <App/>,
    exact: true,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'users',
        lazy: () => import('./components/Users').then(()=>({ element: <Users /> }))
      },
      {
        path: 'posts',
        lazy: () => import('./components/Posts').then(()=>({ element: <Posts /> }))
      },
      {
        path: 'comments',
        lazy: () => import('./components/Сomments').then(()=>({element: <Comments />}))
      }
    ]
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);