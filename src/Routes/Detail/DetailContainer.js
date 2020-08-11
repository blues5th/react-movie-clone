import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { getDetail, getSimiler } from "../../api";

export default () => {
  const { pathname } = useLocation();
  const params = useParams();
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };
  const isTv = pathname.includes("tv");
  const [data, setData] = useState({
    isLoading: true,
    detail: [],
    detailError: null,
    similer: [],
    similerError: null,
  });
  const getDetailData = async () => {
    const [detail, detailError] = await getDetail(pathname);
    const [similer, similerError] = await getSimiler(pathname);
    console.log(detail);
    console.log(similer);
    setData({
      isLoading: false,
      detail,
      detailError,
      similer,
      similerError,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getDetailData();
  }, [params]);
  return <DetailPresenter goBack={handleGoBack} data={data} isTv={isTv} />;
};
