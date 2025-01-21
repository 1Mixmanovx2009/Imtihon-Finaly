import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import PagesRouter from './router/index';
function App() {
    return (_jsx(_Fragment, { children: _jsx(PagesRouter, {}) }));
}
export default App;
