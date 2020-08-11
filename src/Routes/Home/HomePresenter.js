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

export default ({ nowPlaying, upcoming, popular, isLoading }) => (
  <>
    {isLoading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying.length > 0 ? <Title>Now Playing</Title> : null}
        <ListContainer>
          {nowPlaying.map((e) => (
            <Poster key={e.id} data={e} />
          ))}
        </ListContainer>
        {upcoming.length > 0 ? <Title>Upcoming</Title> : null}
        <ListContainer>
          {upcoming.map((e) => (
            <Poster key={e.id} data={e} />
          ))}
        </ListContainer>
        {popular.length > 0 ? <Title>Popular</Title> : null}
        <ListContainer>
          {popular.map((e) => (
            <Poster key={e.id} data={e} />
          ))}
        </ListContainer>
      </Container>
    )}
  </>
);
