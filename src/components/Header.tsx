import React from "react";
import { SearchBar } from "./SearchBar";

interface HeaderProps {
  searchTerm: any;
  setSearchTerm: any;
  keyPressed: any;
  search: any;
  loading: any;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  keyPressed,
  search,
  loading,
}) => {
  return (
    <div
      style={{ flex: "1 1 20%", backgroundColor: "#DDE2E9", display: "grid" }}
    >
      {!loading && search && (
        <div className="results">Search Results for "{searchTerm}"</div>
      )}
      {search && loading && (
        <div className="results">Searching for "{searchTerm}"</div>
      )}
      {!loading && !search && (
        <SearchBar
          searchTerm={searchTerm}
          placeholder={"Search for photo"}
          setSearchTerm={setSearchTerm}
          keyPressed={keyPressed}
        />
      )}
    </div>
  );
};
