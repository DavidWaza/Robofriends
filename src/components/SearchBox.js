import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="tc">
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
