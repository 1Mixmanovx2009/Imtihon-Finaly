import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Hero } from '../../components/Hero/Hero';
import ProductListArrive from '../../components/ProductListArrivals/ProductListArrivals';
import ProductListSelling from '../../components/ProductListSelling/ProductListSelling';
import Dress from '../../components/Dress/Dress';
import Commits from '../../components/Commits/Commits';
function Home() {
    return (_jsxs("div", { children: [_jsx(Hero, {}), _jsx(ProductListArrive, {}), _jsx(ProductListSelling, {}), _jsx(Dress, {}), _jsx(Commits, {})] }));
}
export default Home;
