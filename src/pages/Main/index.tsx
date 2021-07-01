import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { Container, Card, Row, Button } from 'react-bootstrap';

import Header from '../../components/Header';

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

  const goListEpisodes = (id, name) => {
    props.history.push('/list-episodes', { id, name });
  };

  return (
    <>
      <Header />
      <Container
        style={{
          paddingTop: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', 
          minWidth: '300px'
        }}
      >
        <h1 style={{ color: '#FFF', fontFamily: 'ubuntu', marginTop: 20 }}>
          Movie Now
        </h1>
        <Row
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {movies.map((movie) => (
            <Card key={movie?.id} style={{ width: '250px', margin: '10px' }}>
              <Card.Img
                style={{
                  width: '190px', 
                  height: '330px',
                  alignSelf: 'center',
                  paddingTop: '20px',
                  cursor: 'pointer'
                }}
                variant="top"
                src={movie?.url_picture}
                onClick={() => goListEpisodes(movie?.id, movie?.name)}
              />
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Card.Title>{movie?.name}</Card.Title>
                <Card.Text style={{ fontSize: '12px' }}>{movie?.description}</Card.Text>
                <Button style={{ width: '100%' }} onClick={() => goListEpisodes(movie?.id, movie?.name)} variant="outline-dark">Watch now</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Main;
