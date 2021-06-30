import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledContainer = (props => <Container {...props} />)`
    display: flex;    
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    border-radius: 4px;
    border: 1px;
    border-color: #fff;
    border-style: solid;
`

export const Title = (props => <h1 {...props} />)`
    margin-top: 20px;
    color: #fff;
`

export const List = (props => <ul {...props} />)`
    // TOP RIGHT BOTTOM LEFT 
    padding: 100px 10px 10px 10px;
    list-style: none;
    width: 70%;

    > li {
        color: #fff;
        display: flex;
        justify-content: space-beetwen;
    }
`

export const StyledButton = (props => <Button {...props} />)`

`