import styled from 'styled-components';
import { Container, Card, Row, Button } from 'react-bootstrap';

export const StyledContainer = (props => <Container {...props} />)`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
`;


export const StyledRow = (props => <Row {...props} />)`
  display: flex;
  justify-content: center;
`;

export const StyledButton = (props => <Button {...props} />)`
  width: 100%;
`;

export const StyledCard = (props => <Card {...props} />)`
  width: 250px;
  margin: 10px;
`;

export const StyledCardImg = (props => <Card.img {...props} />)`
  width: 220px;
  height: 320px;
  align-self: center;
  padding-top: 20px;
  cursor: pointer;
`;

export const StyledCardBody = (props => <Card.Body {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: space-beetwen;
`;

export const StyledCardText = (props => <Card.Text {...props} />)`
  font-size: 12px;
`;