import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Select } from "antd";
const SelectComponent = () => {
    const { Option } = Select;
    return (_jsx(_Fragment, { children: _jsxs(Select, { className: "text-lg", bordered: false, defaultValue: "Shop", style: { width: 94 }, children: [_jsx(Option, { value: "tshirt", children: "T-Shirt" }), _jsx(Option, { value: "shorts", children: "Shorts" }), _jsx(Option, { value: "hoodies", children: "Hoodies" })] }) }));
};
export default SelectComponent;
