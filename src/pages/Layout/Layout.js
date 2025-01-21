import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// import TopHeader from '../../components/TopHeader/TopHeader'
import BottomHeader from '../../components/BottomHeader/BottomHeader';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (_jsxs(_Fragment, { children: [_jsx(BottomHeader, {}), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
export default Layout;
