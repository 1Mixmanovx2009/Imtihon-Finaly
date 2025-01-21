import { Select } from "antd";
import React from "react";

const SelectComponent = () => {
    const { Option } = Select;

    return (
        <>
            <Select
                className="text-lg"
                bordered={false}
                defaultValue="Shop"
                style={{ width: 94 }}
            >
                <Option value="tshirt">T-Shirt</Option>
                <Option value="shorts">Shorts</Option>
                <Option value="hoodies">Hoodies</Option>
            </Select>
        </>
    );
};

export default SelectComponent;