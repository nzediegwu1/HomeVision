import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import { HomeCard, NoResource, VisionNavBar, ErrorToast } from './components';
import style from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRequest } from './helpers';

function App() {
  const [state, setState] = useState({
    hasMore: true,
    page: 1,
  });
  const [resource, fetchResource] = useRequest();

  const fetchData = () => {
    const { page } = state;
    fetchResource({ page }).then((res) => {
      if (!res) return setState({ ...state, hasMore: false });
      setState({ page: page + 1, hasMore: true });
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
              scrollThreshold={0.9}
              next={fetchData}
              hasMore={state.hasMore}
              endMessage={
                <ErrorToast loading={loading} fetchData={fetchData} />
              }
              loader={<h4>Loading...</h4>}
            >
              <Row>
                {response.map((home) => (
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
