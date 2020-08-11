import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkComponent = styled(Link)`
  pointer-events: ${(props) => (props.season ? "none" : "")};
`;

const InfoComponent = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
`;
const Info = styled.div`
  width: 100%;
  text-align: center;
  font-size: 8px;
`;

const ImageContainer = styled.div`
  height: 180px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  background-color: black;
`;

const Container = styled.div`
  position: relative;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.5);
    z-index: 1;
    ${InfoComponent} {
      opacity: 1;
    }
  }
`;

const Poster = ({ data, isTv = false, season = false }) => (
  <Container>
    <LinkComponent
      to={season ? "#" : isTv ? `/tv/${data.id}` : `/movie/${data.id}`}
    >
      <ImageContainer
        bgImage={
          data.poster_path
            ? `https://image.tmdb.org/t/p/w300/${data.poster_path}`
            : require("../assets/default.jpg")
        }
      >
        <InfoComponent>
          <Title>{isTv ? data.name : data.title}</Title>
          {season && <Info>{data.air_date}</Info>}
          <Info>
            {data.overview.length > 70
              ? `${data.overview.substring(0, 70)}...`
              : data.overview}
          </Info>
          {season ? null : (
            <div>
              <Info>
                <span role="img" aria-label="">
                  ⭐️
                </span>{" "}
                {data.vote_average} / 10
              </Info>
            </div>
          )}
        </InfoComponent>
      </ImageContainer>
    </LinkComponent>
  </Container>
);

Poster.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

export default Poster;
