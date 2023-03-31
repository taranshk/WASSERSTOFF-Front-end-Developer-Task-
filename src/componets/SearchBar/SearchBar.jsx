import React from "react";
import "./searchbar.css";
import { Input, Space } from 'antd';
const { Search } = Input;
const onSearch = (value) => console.log(value);
const SearchBar = () => (
  <Space direction="vertical">
    <Search className="SearchBar"
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 450,
    
      }}
    />
</Space>
);
  export default SearchBar;