import styled from 'styled-components';
import { Container, Card, Row, Button } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
`;

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const StyledCard = styled(Card)`
  width: 250px;
  margin: 10px;
`;
