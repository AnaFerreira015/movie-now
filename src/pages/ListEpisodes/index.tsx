import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Header from '../../components/Header';

import { Container, Button } from 'react-bootstrap';

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
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '100px',
          borderRadius: '4px',
          border: '1px',
          borderColor: '#fff',
          borderStyle: 'solid'
        }}
      >
        <h1
          style={{
            marginTop: '20px',
            color: '#fff'
          }}
        >{name}</h1>
        <ul
          style={{
            padding: '100px 10px 10px 10px',
            listStyle: 'none',
            width: '100%'
          }}
        >
          {episodes?.length >0 ? (
            episodes.map(ep => (
              <li key={ep?.id} style={{ color: '#fff', display: 'flex', justifyContent: 'space-between', margin: '12px'}}>
                <p>{ep?.name}</p>
                <Button onClick={() => watchEpisode(ep?.id, ep?.name, ep?.url_movie)}>Watch Now</Button>
              </li>
            )) 
          ) : (
            <h1
              style={{
                fontSize: '25px',
                textAlign: 'center',
                color: '#d5d5d5'
              }}
            >This serie is empty!</h1>
          )}
        </ul>
      </Container>
    </>
  );
}

export default ListMovies;