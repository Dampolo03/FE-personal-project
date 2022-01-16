import React from "react";
import { FormGroup, InputGroup, FormControl } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  searchTerm: any;
  placeholder: any;
  setSearchTerm: any;
  keyPressed: any;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  placeholder,
  setSearchTerm,
  keyPressed,
}) => {
  return (
    <FormGroup style={{ margin: "auto 10%", width: "auto" }}>
      <InputGroup>
        <InputGroup.Text>
          <SearchIcon fontSize="small" />
        </InputGroup.Text>
        <FormControl
          type="text"
          value={searchTerm}
          onChange={(event: any) => {
            setSearchTerm(event.target.value);
          }}
          placeholder={placeholder}
          onKeyUp={keyPressed}
        />
      </InputGroup>
    </FormGroup>
  );
};
