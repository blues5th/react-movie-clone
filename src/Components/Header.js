import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = styled.header`
  color: white;
  width: 100%;
  height: 60px;
  padding: 15px 50px;
  display: flex;
  align-items: center;
  background-color: #1b2530;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-right: 100px;
  text-align: center;
  border-bottom: 2px solid
    ${(props) => (props.current ? "white" : "transparent")};
  opacity: ${(props) => (props.current ? 1 : 0.5)};
`;

const SearchContainer = styled.div`
  height: 100%;
  display: flex;
`;

const SearchField = styled.input`
  height: 100%;
  width: 300px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  padding-left: 5px;
`;

const SLink = styled(Link)`
  font-size: 20px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchButton = styled(Link)`
  font-size: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d35400;
  border-radius: 0 5px 5px 0;
`;

export default () => {
  const { pathname } = useLocation();
  const [keywords, setKeywords] = useState("");

  let typingTimer = null;

  const handleSearch = ({ target: { value } }) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      if (value) {
        setKeywords(value);
      }
    }, 800);
  };

  useEffect(() => {
    return () => {
      clearTimeout(typingTimer);
    };
  }, []);
  return (
    <Header>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Movies</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV Shows</SLink>
        </Item>
      </List>
      <SearchContainer>
        <SearchField
          type="text"
          onChange={handleSearch}
          placeholder={"Search Movies or TV shows"}
        />
        <Redirect push to={keywords === "" ? "/" : `/search/${keywords}`} />
        {/* <SearchButton to="/search">
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton> */}
      </SearchContainer>
    </Header>
  );
};
