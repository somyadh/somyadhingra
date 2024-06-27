import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Blog from './pages/blog'
import ProfilePage from './pages/profile'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogPost from './pages/blogPage';
import theme from './theme';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blogs/:blogId",
    element: < BlogPost />,
  },
  {
    path: "/blogs",
    element: < Blog />,
  },
  {
    path: "/about",
    element: < ProfilePage />,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>

  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <RouterProvider router={router} />
  </ChakraProvider>
</React.StrictMode>);