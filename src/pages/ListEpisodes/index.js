import React from 'react';
import { StyledContainer, Title, List, StyledButton } from './styles';

function ListMovies() {
  return (
    <StyledContainer>
      <Title>Name Serie</Title>
      <List>
        <li>
          <p>Primeiro episódio</p>
          <StyledButton>Watch Now</StyledButton></li>
      </List>
    </StyledContainer>
  );
}

export default ListMovies;