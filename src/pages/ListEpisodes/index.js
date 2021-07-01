import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { StyledContainer, Title, List, StyledButton, Information } from './styles';
import Header from '../../components/Header';

function ListMovies(props) {
  const {id, name} = props.history.location.state;
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function loadEpisodes() {
      const db = firebase.firestore();

      db.collection(`movies/${id}/episodes`).orderBy('id').get().then((querySnapshot) => {
        const arrEpisoddes = [];
        querySnapshot.forEach((doc) => {
          arrEpisoddes.push(doc.data());
        });
        setEpisodes(arrEpisoddes);
      });
    }

    loadEpisodes();
  }, []);

  const watchEpisode = (id, name, url_movie) => {
    props.history.push('/watch', { id, name, url_movie });
  }

  return (
    <>
      <Header />
      <StyledContainer>
        <Title>{name}</Title>
        <List>
          {episodes?.length >0 ? (
            episodes.map(ep => (
              <li key={ep?.id}>
                <p>{ep?.name}</p>
                <StyledButton onClick={() => watchEpisode(ep?.id, ep?.name, ep?.url_movie)}>Watch Now</StyledButton>
              </li>
            )) 
          ) : (
            <Information>This serie is empty!</Information>
          )}
        </List>
      </StyledContainer>
    </>
  );
}

export default ListMovies;