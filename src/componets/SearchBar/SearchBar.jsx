import React from "react";
import "./searchbar.css"; // Importing the styles for the search bar component
import { Input, Space } from 'antd'; // Importing Ant Design Input and Space components
const { Search } = Input; // Destructuring the Ant Design Input component to use Search separately

// Function to handle the search
const onSearch = (value) => console.log(value);

// The SearchBar component
const SearchBar = () => (
  <Space direction="vertical">
    {/* The search bar with placeholder text and onSearch function */}
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
