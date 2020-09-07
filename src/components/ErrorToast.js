import React from 'react';
import styled from 'styled-components';
import { Toast, Button } from 'react-bootstrap';

/**
 * @description Renders error message using a toast, upon server error
 *
 * @param {Object} { fetchData, loading } 
 * @returns {React.Component} React Component
 */
const ErrorToast = ({ fetchData, loading }) => {
  return (
    <Wrapper>
      <Toast>
        <Toast.Header>
          <strong className="mr-auto">Error</strong>
        </Toast.Header>
        <Toast.Body>
          There was an error loading new data &nbsp;
          <Button
            size="sm"
            onClick={fetchData}
            variant="outline-info"
            className="refresh-button"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Refresh'}
          </Button>
        </Toast.Body>
      </Toast>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .toast {
    bottom: 0px;
    left: 3.5em;
    position: fixed;
  }
  .toast,
  .toast-header {
    background-color: #1d2124;
    color: white;
  }
  .refresh-button {
    float: right;
    margin-top: -0.3em;
  }
  @media only screen and (max-width: 387px) {
    .refresh-button {
      margin-top: 0.3em;
    }
  }
`;

export default ErrorToast;
