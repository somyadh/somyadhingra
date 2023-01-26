import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Card from './components/card'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/blogs",
    element: <Card />,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render( <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>);