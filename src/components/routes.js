import React, { lazy } from 'react';


export const Routes= [
    {
        path: '/',
        component: lazy(() => import('../pages/home')),
        exact: false,
        private: false,
        fallback: <div> Loading... </div>
    },
    {
        path: '/blogs',
        component: lazy(() => import('../pages/blog')),
        exact: false,
        private: false,
        fallback: <div> Loading... </div>
    },
]