import React from 'react';
import Home from './pages/home';
import { Analytics } from "@vercel/analytics/react"


const App = () => (
    <>
        <Home></Home>
        <Analytics />
    </>
);

export default App;
