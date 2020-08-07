import React from "react";
import DetailPresenter from "./DetailPresenter";
import { useHistory, useLocation } from "react-router-dom";

export default () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  return <DetailPresenter goBack={handleGoBack} />;
};
