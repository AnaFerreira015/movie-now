import { Container } from 'react-bootstrap';

export const StyledContainer = (props => <Container {...props} />)`
    display: flex;    
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

export const Title = (props => <h1 {...props} />)`
    color: #fff;
    margin-bottom: 50px;
`