import React from 'react';
import style from 'styled-components';
import { Button } from 'react-bootstrap';

const NoResource = ({ action, loading }) => (
  <Wrapper>
    <div className="no-resource">
      <h3>There was an error loading the page</h3>
      <Button
        onClick={action}
        disabled={loading}
        variant="info"
        className="p-h-lg m-t-sm"
      >
        {loading ? 'Loading...' : 'Refresh'}
      </Button>
    </div>
  </Wrapper>
);

const Wrapper = style.div`
.no-resource {
  text-align: center;
  margin-top: 20%;
}
`;

export default NoResource;
