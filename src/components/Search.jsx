import React from "react";

function Search({searchTerm, onsetSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onsetSearchChange(e.target.value)}
      />
    </div>
  );
}


export default Search;
