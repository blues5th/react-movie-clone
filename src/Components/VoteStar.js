import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as star } from "@fortawesome/free-regular-svg-icons";

const Continer = styled.span`
  margin-right: 10px;
`;

const VoteStar = ({ rate }) => (
  <Continer>
    <FontAwesomeIcon
      icon={rate >= 2 ? faStar : rate === 0 ? star : faStarHalfAlt}
      color="#f1c40f"
      size="lg"
    />
    <FontAwesomeIcon
      icon={rate >= 4 ? faStar : rate <= 2 ? star : faStarHalfAlt}
      color="#f1c40f"
      size="lg"
    />
    <FontAwesomeIcon
      icon={rate >= 6 ? faStar : rate <= 4 ? star : faStarHalfAlt}
      color="#f1c40f"
      size="lg"
    />
    <FontAwesomeIcon
      icon={rate >= 8 ? faStar : rate <= 6 ? star : faStarHalfAlt}
      color="#f1c40f"
      size="lg"
    />
    <FontAwesomeIcon
      icon={rate >= 10 ? faStar : rate <= 8 ? star : faStarHalfAlt}
      color="#f1c40f"
      size="lg"
    />
  </Continer>
);

VoteStar.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default VoteStar;
