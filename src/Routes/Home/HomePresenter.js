import React from "react";
import styled, { keyframes } from "styled-components";
import Poster from "../../Components/Poster";

const fadeOutAnimation = keyframes`
  from{
    opacity:1;
  }
  to{
    opacity:0;
  }
`;
const fadeInAnimation = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

const Container = styled.div`
  padding: 30px 50px;
  &.fade-enter {
    animation: ${fadeInAnimation} 0.5s;
  }
  &.fade-exit {
    animation: ${fadeOutAnimation} 0.5s;
  }
`;

const Title = styled.div`
  font-size: 20px;
  margin: 30px 0;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-gap: 25px;
`;

export default ({ nowPlaying, upcoming, popular }) => (
  <Container>
    <div>
      <Title>Now Playing</Title>
      <ListContainer>
        {nowPlaying.map((e) => (
          <Poster key={e.id} data={e} isMovie />
        ))}
      </ListContainer>
    </div>
  </Container>
);
