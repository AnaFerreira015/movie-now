import React from 'react';
import { Player, BigPlayButton } from 'video-react';
import { Container } from 'react-bootstrap';

import Header from '../../components/Header';

function Watch(props) {
  const {id, name, url_movie} = props.history.location.state;

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
          marginTop: '100px'
        }}
      >
        <h1 style={{ color: '#fff', marginBottom: '50px' }}>{name}</h1>
        <Player src={url_movie} autoplay>
          <BigPlayButton position="center" />
        </Player>
      </Container>
    </>
  )
}

export default Watch;