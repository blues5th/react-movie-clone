import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  padding: 30px;
`;

const BackButton = styled.div`
  font-size: 20px;
`;

const DetailPresenter = ({ goBack }) => (
  <Container>
    <BackButton onClick={goBack}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </BackButton>
  </Container>
);

export default DetailPresenter;
