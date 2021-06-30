import React, { useState, useEffect } from 'react';
import { StyledContainer, Title, List, StyledButton } from './styles';
import Header from '../../components/Header';

function ListMovies(props) {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <>
      <Header />
      <StyledContainer>
        <Title>Name Serie</Title>
        <List>
          <li>
            <p>Primeiro episódio</p>
            <StyledButton>Watch Now</StyledButton></li>
        </List>
      </StyledContainer>
    </>
  );
}

export default ListMovies;