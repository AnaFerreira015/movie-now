import React from 'react';

import Header from '../../components/Header';
import { StyledContainer, StyledRow, StyledButton, StyledCard } from './styles';

function Main() {
  return (
    <>
      <Header />
      <StyledContainer>
        <h1 style={{ color: '#FFF', fontFamily: 'ubuntu', marginTop: 20 }}>
          Movie Now
        </h1>
        <StyledRow>
          <StyledCard>
            <StyledCard.Img
              variant="top"
              style={{
                width: 220,
                height: 320,
                alignSelf: 'center',
                paddingTop: 20,
                cursor: 'pointer',
              }}
              src="https://cdn.fstatic.com/media/movies/covers/2020/04/blindspot-new_qGVqRYJ.jpg"
            />
            <StyledCard.Body
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <StyledCard.Title>Card Title</StyledCard.Title>
              <StyledCard.Text style={{ fontSize: 12 }}>
                Some quick example text to build on the card title and make up
                the bulk of the card`&apos;`s content.
              </StyledCard.Text>
              <StyledButton style={{ width: '100%' }} variant="outline-dark">
                Go somewhere
              </StyledButton>
            </StyledCard.Body>
          </StyledCard>
        </StyledRow>
      </StyledContainer>
    </>
  );
}

export default Main;
