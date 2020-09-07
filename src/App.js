import React, { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import { HomeCard, NoResource, VisionNavBar, ErrorToast } from './components';
import style from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import houses from './houses';

function App() {
  const [state, setState] = useState({ houses, hasMore: true });

  const fetchData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setState({
        houses: state.houses.concat(houses.slice(0, 5)),
        hasMore: !state.hasMore,
      });
    }, 1500);
  };
  return (
    <Wrapper>
      <div className="App">
        <VisionNavBar />
        <br />
        <Container>
          {!state.houses.length ? (
            <NoResource action={() => {}} />
          ) : (
            <InfiniteScroll
              style={{ overflow: 'hidden' }}
              dataLength={state.houses.length}
              next={fetchData}
              hasMore={state.hasMore}
              endMessage={<ErrorToast fetchData={fetchData} />}
              loader={<h4>Loading...</h4>}
            >
              <Row>
                {state.houses.map((home) => (
                  <HomeCard key={home.id + Math.random()} home={home} />
                ))}
              </Row>
            </InfiniteScroll>
          )}
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
