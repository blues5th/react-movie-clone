import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DetailScreen from "../../Components/DetailScreen";
import Loader from "../../Components/Loader";

const Container = styled.div`
  position: absolute;
  width: 100%;
  &.page-enter {
    opacity: 0;
    transform: translateY(100px);
  }

  &.page-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 500ms, transform 500ms;
    transition-delay: 200ms;
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

const BackButton = styled.div`
  font-size: 30px;
  position: absolute;
  left: 50px;
  top: 30px;
  cursor: pointer;
  z-index: 1;
`;

const DetailPresenter = ({ goBack, data, isTv, isLoading }) => (
  <>
    {isLoading ? (
      <Loader />
    ) : (
      <Container>
        <BackButton onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackButton>
        <DetailScreen {...data} isTv={isTv} />
      </Container>
    )}
  </>
);

export default DetailPresenter;
