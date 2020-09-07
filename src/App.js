import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { HomeCard, NoResource, VisionNavBar, ErrorToast } from './components';
import style from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  return (
    <Wrapper>
      <div className="App">
        <VisionNavBar>
          {({ loading, response, hasMore, fetchData }) => (
            <>
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
                    hasMore={hasMore}
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
            </>
          )}
        </VisionNavBar>
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
