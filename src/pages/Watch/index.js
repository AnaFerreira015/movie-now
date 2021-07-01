import React from 'react';
import { Player, BigPlayButton } from 'video-react';

import { StyledContainer, Title } from './styles';
import Header from '../../components/Header';

function Watch(props) {
  const {id, name, url_movie} = props.history.location.state;

  return (
    <>
      <Header />
      <StyledContainer>
        <Title>{name}</Title>
        <Player src={url_movie} autoplay>
          <BigPlayButton position="center" />
        </Player>
      </StyledContainer>
    </>
  )
}

export default Watch;