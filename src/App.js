import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { HomeCard, NoResource, VisionNavBar } from './components';
import style from 'styled-components';
import houses from './houses';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Wrapper>
      <div className="App">
        <VisionNavBar />
        <br />
        <Container>
          <Row>
            {!houses.length ? (
              <NoResource action={() => {}} />
            ) : (
              houses.map((home) => <HomeCard key={home.id} home={home} />)
            )}
          </Row>
        </Container>
      </div>
    </Wrapper>
  );
}

const Wrapper = style.div`
  .app-logo {
    height: 50px;
  }
`;

export default App;
