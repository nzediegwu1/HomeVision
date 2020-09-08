import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import { HomeCard, NoResource, VisionNavBar, ErrorMessage } from './components';
import style from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRequest } from './helpers';

/**
 * @description Landing page of HomeVision app
 *
 * @returns {React.Component} React Component
 */
function App() {
  const [state, setState] = useState({ page: 1, errorCount: 0 });
  const [resource, fetchResource] = useRequest();

  const fetchData = () => {
    const { page } = state;
    fetchResource({ page }).then((errorCount) => {
      setState({ page: page + 1, errorCount });
    });
  };

  useEffect(fetchData, []);

  const { loading, response } = resource;

  return (
    <Wrapper>
      <div className="App">
        <VisionNavBar />
        <br />
        <Container>
          {!response.length ? (
            <NoResource action={fetchData} loading={loading} />
          ) : (
            <InfiniteScroll
              style={{ overflow: 'hidden' }}
              dataLength={response.length}
              next={fetchData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
            >
              <>
                <Row>
                  {response.map((home) => (
                    <HomeCard key={home.id + Math.random()} home={home} />
                  ))}
                </Row>
                {state.errorCount ? (
                  <ErrorMessage count={state.errorCount} />
                ) : (
                  ''
                )}
              </>
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
