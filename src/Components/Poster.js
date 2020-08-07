import React, { useState } from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Detail from "../Routes/Detail";

const LinkComponent = styled(Link)`
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.5);
  }
`;
const Component = styled.div`
  height: 180px;
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  background-position: center center;
`;
const Poster = ({ data, isMovie }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <LinkComponent to={isMovie ? `/movie/${data.id}` : `/tv/${data.id}`}>
      <Component
        onClick={handleClick}
        isClicked={isClicked}
        bgImage={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
      />
    </LinkComponent>
  );
};

export default Poster;
