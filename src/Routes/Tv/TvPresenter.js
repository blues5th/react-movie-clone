import React from "react";
import styled from "styled-components";
import Poster from "../../Components/Poster";
import Loader from "../../Components/Loader";

const Container = styled.div`
  position: absolute;
  width: 100%;
  padding: 30px 50px;
  &.page-enter {
    opacity: 0;
    transform: translateY(100px);
  }

  &.page-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 500ms, transform 500ms;
  }

  &.page-exit {
    opacity: 1;
    transform: translateY(0px);
  }

  &.page-exit-active {
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 500ms, transform 500ms;
  }
`;

const Title = styled.div`
  font-size: 30px;
  margin: 30px 0;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-gap: 25px;
`;

export default ({ topRated, popular, airingToday, isLoading }) => (
  <>
    {isLoading ? (
      <Loader />
    ) : (
      <Container>
        {topRated.length > 0 ? <Title>Top Rated</Title> : null}
        <ListContainer>
          {topRated.map((e) => (
            <Poster key={e.id} data={e} isTv />
          ))}
        </ListContainer>
        {popular.length > 0 ? <Title>Popular</Title> : null}
        <ListContainer>
          {popular.map((e) => (
            <Poster key={e.id} data={e} isTv />
          ))}
        </ListContainer>
        {airingToday.length > 0 ? <Title>Airing Today</Title> : null}
        <ListContainer>
          {airingToday.map((e) => (
            <Poster key={e.id} data={e} isTv />
          ))}
        </ListContainer>
      </Container>
    )}
  </>
);
