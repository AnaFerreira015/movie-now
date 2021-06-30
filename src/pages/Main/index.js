import React from 'react';

import Header from '../../components/Header';
import { StyledContainer, StyledRow, StyledButton, StyledCard, StyledCardImg, StyledCardBody, StyledCardText } from './styles';

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
            <StyledCardImg
              variant="top"
              src="https://cdn.fstatic.com/media/movies/covers/2020/04/blindspot-new_qGVqRYJ.jpg"
            />
            <StyledCardBody>
              <StyledCard.Title>Card Title</StyledCard.Title>
              <StyledCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card`&apos;`s content.
              </StyledCardText>
              <StyledButton style={{ width: '100%' }} variant="outline-dark">
                Go somewhere
              </StyledButton>
            </StyledCardBody>
          </StyledCard>
          <StyledCard>
            <StyledCardImg
              variant="top"
              src="https://cdn.fstatic.com/media/movies/covers/2020/04/blindspot-new_qGVqRYJ.jpg"
            />
            <StyledCardBody>
              <StyledCard.Title>Card Title</StyledCard.Title>
              <StyledCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card`&apos;`s content.
              </StyledCardText>
              <StyledButton style={{ width: '100%' }} variant="outline-dark">
                Go somewhere
              </StyledButton>
            </StyledCardBody>
          </StyledCard>
          <StyledCard>
            <StyledCardImg
              variant="top"
              src="https://cdn.fstatic.com/media/movies/covers/2020/04/blindspot-new_qGVqRYJ.jpg"
            />
            <StyledCardBody>
              <StyledCard.Title>Card Title</StyledCard.Title>
              <StyledCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card`&apos;`s content.
              </StyledCardText>
              <StyledButton style={{ width: '100%' }} variant="outline-dark">
                Go somewhere
              </StyledButton>
            </StyledCardBody>
          </StyledCard>
          <StyledCard>
            <StyledCardImg
              variant="top"
              src="https://cdn.fstatic.com/media/movies/covers/2020/04/blindspot-new_qGVqRYJ.jpg"
            />
            <StyledCardBody>
              <StyledCard.Title>Card Title</StyledCard.Title>
              <StyledCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card`&apos;`s content.
              </StyledCardText>
              <StyledButton style={{ width: '100%' }} variant="outline-dark">
                Go somewhere
              </StyledButton>
            </StyledCardBody>
          </StyledCard>
        </StyledRow>
      </StyledContainer>
    </>
  );
}

export default Main;
