import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100vh;
`;

export default () => (
  <Container>
    <FontAwesomeIcon icon={faSpinner} pulse size={"5x"} />
  </Container>
);
