import React, { Component } from 'react';
import { Container, Card, Col, Row, Button } from 'react-bootstrap';

class index extends Component {
  state = {};

  render() {
    return (
      <>
        <Container
          style={{
            paddingTop: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 300,
          }}
        >
          <h1 style={{ color: '#FFF', fontFamily: 'ubuntu', marginTop: 20 }}>
            Movie Now
          </h1>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: 250, margin: 10 }}>
              <Card.Img
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
              <Card.Body
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ fontSize: 12 }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card`&apos;`s content.
                </Card.Text>
                <Button style={{ width: '100%' }} variant="outline-dark">
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>
    );
  }
}

export default index;
