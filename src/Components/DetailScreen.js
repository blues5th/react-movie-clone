import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import VoteStar from "./VoteStar";
import Poster from "./Poster";

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 50px 100px;
`;

const BGImageContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 500px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  background-color: white;
  box-shadow: inset 0 -150px 150px -10px #0e0e0f;
  opacity: 0.3;
  z-index: -1;
`;

const PosterContainer = styled.div`
  width: 250px;
  height: 350px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  background-color: white;
`;

const ContentContainer = styled.div`
  margin-left: 50px;
  flex: 3;
`;

const Section = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const SectionTitle = styled.div`
  margin: 20px 0;
  font-size: 25px;
`;

const LinkSection = styled.a`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin: 10px 0;
`;

const VideoSection = styled.div`
  margin-top: 40px;
`;

const Title = styled.span`
  font-size: 55px;
  margin-right: 20px;
  width: 500px;
`;

const Info = styled.span`
  font-size: 18px;
  margin-right: 10px;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-gap: 25px;
`;

const DetailScreen = ({ detail, similer, isTv }) => (
  <>
    {detail && similer ? (
      <Container>
        <BGImageContainer
          bgImage={
            detail.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`
              : require("../assets/default.jpg")
          }
        ></BGImageContainer>
        <PosterContainer
          bgImage={
            detail.poster_path
              ? `https://image.tmdb.org/t/p/w500/${detail.poster_path}`
              : require("../assets/default.jpg")
          }
        />
        <ContentContainer>
          <Section>
            <Title>{isTv ? detail.name : detail.title}</Title>
            {detail.vote_average ? (
              <VoteStar rate={detail.vote_average} />
            ) : null}
            <Info>{detail.vote_average} / 10</Info>
            <Info>({detail.vote_count} Votes)</Info>
          </Section>
          <Section>
            <Info>
              {isTv
                ? detail.air_date || detail.last_air_date
                : detail.release_date &&
                  detail.release_date.substring(0, 7)}{" "}
              /
            </Info>
            {!isTv ? <Info>detail.runtime}min /</Info> : null}
            {detail.genres &&
              detail.genres.map((e, i) => (
                <Info key={e.id}>
                  {e.name}
                  {i < detail.genres.length - 1 ? "," : null}
                </Info>
              ))}
          </Section>
          <Section>
            {detail.production_companies &&
              detail.production_companies.map((e, i) => (
                <Info key={e.id}>
                  {e.name}
                  {i < detail.production_companies.length - 1 ? " /" : null}
                </Info>
              ))}
          </Section>
          <Section>
            {detail.production_countries &&
              detail.production_countries.map((e, i) => (
                <Info key={i}>
                  {e.name}
                  {i < detail.production_countries.length - 1 ? " /" : null}
                </Info>
              ))}
          </Section>
          <LinkSection
            href={`https://www.imdb.com/title/${detail.imdb_id}`}
            target="_blank"
          >
            <Icon src="https://img.icons8.com/color/48/000000/imdb.png" />
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </LinkSection>
          <Section>{detail.overview}</Section>
          <VideoSection>
            <SectionTitle>Trailers</SectionTitle>
            {detail.videos?.results?.map((e) => {
              if (e.site.toLowerCase() === "youtube") {
                return (
                  <LinkSection
                    key={e.key}
                    href={`https://www.youtube.com/watch?v=${e.key}`}
                    target="_blank"
                  >
                    Youtube {e.name}
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      style={{ marginLeft: "5px" }}
                    />
                  </LinkSection>
                );
              }
            })}
          </VideoSection>

          {isTv && detail.seasons ? (
            <VideoSection>
              <SectionTitle>Seasons</SectionTitle>
              <ListContainer>
                {detail.seasons.map((e) => (
                  <Poster key={e.id} data={e} isTv={isTv} season />
                ))}
              </ListContainer>
            </VideoSection>
          ) : null}

          <VideoSection>
            <SectionTitle>Related {isTv ? "TV Shows" : "Movies"}</SectionTitle>
            <ListContainer>
              {similer &&
                similer.map((e) => <Poster key={e.id} data={e} isTv={isTv} />)}
            </ListContainer>
          </VideoSection>
        </ContentContainer>
      </Container>
    ) : null}
  </>
);

DetailScreen.propTypes = {
  detail: PropTypes.arrayOf(
    PropTypes.shape({
      backdrop_path: PropTypes.string,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      name: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
      runtime: PropTypes.number.isRequired,
      imdb_id: PropTypes.string,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
      production_companies: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
      production_countries: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
        })
      ),
    })
  ),
  similer: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isTv: PropTypes.bool,
    })
  ),
};

export default DetailScreen;
