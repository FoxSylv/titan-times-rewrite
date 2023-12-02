import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Index from './routes/Index';
import News from './routes/News';
import { newsRegistry } from './data/newsRegistry.js';


const router = createBrowserRouter([{
    path: "/",
    element: <Root />,
    id: "root",
    loader: () => newsRegistry,
    errorElement: <ErrorPage />,
    //This nesting allows the root (e.g. navbar) to appear on the error pages
    children: [{
        path: "*",
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Index />},
            {path: "news/:newsLink", element: <News />},
            {path: "*", element: <ErrorPage is404="true" />}
        ]
    }]
}]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
