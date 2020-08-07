import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
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
  border-radius: 5px 0 0 5px;
  font-size: 18px;
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
        <SearchField type="text" />
        <SearchButton to="/search">
          <FontAwesomeIcon icon={faSearch} />
        </SearchButton>
      </SearchContainer>
    </Header>
  );
};
