import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { StyledContainer, StyledRow, StyledButton, StyledCard, StyledCardImg, StyledCardBody, StyledCardText } from './styles';

function Main(props) {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function loadMovies() {
      const db = firebase.firestore();

      db.collection('movies').get().then((querySnapshot) => {
        const arrMovies = [];
        querySnapshot.forEach((doc) => {
          arrMovies.push(doc.data());
        });
        setMovies(arrMovies);
      });
    }

    loadMovies();
  }, []);

  const goListEpisodes = (id) => {
    props.history.push('/list-episodes', { id });
  }

  return (
    <>
      <Header />
      <StyledContainer>
        <h1 style={{ color: '#FFF', fontFamily: 'ubuntu', marginTop: 20 }}>
          Movie Now
        </h1>
        <StyledRow>
          {movies.map((movie) => (
            <StyledCard key={movie?.id}>
              <StyledCardImg
                variant="top"
                src={movie?.url_picture}
              />
              <StyledCardBody>
                <StyledCard.Title>{movie?.name}</StyledCard.Title>
                <StyledCardText>{movie?.description}</StyledCardText>
                {/* <Link to="/list-episodes" > */}
                  <StyledButton style={{ width: '100%' }} onClick={() => goListEpisodes(movie.id)} variant="outline-dark">Watch now</StyledButton>
                {/* </Link> */}
              </StyledCardBody>
            </StyledCard>
          ))}
        </StyledRow>
      </StyledContainer>
    </>
  );
}

export default Main;
