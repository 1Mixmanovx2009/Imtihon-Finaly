import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import Cart from '../pages/Cart/Cart';
import ChackOut from '../pages/CheckOut/CheckOut';
const PagesRouter = () => {
    return (_jsx(_Fragment, { children: _jsx(Routes, { children: _jsx(Router, { children: _jsxs(Route, { path: '/', exact: true, element: _jsx(Layout, {}), children: [_jsx(Route, { path: '/', exact: true, element: _jsx(Home, {}) }), _jsx(Route, { path: '/detail/:id', exact: true, element: _jsx(Detail, {}) }), _jsx(Route, { path: "/cart", exact: true, element: _jsx(Cart, {}) }), _jsx(Route, { path: "/checkout", exact: true, element: _jsx(ChackOut, {}) })] }) }) }) }));
};
export default PagesRouter;
