import React from 'react';
import { Button } from 'react-bootstrap';

const NoResource = ({ action }) => (
  <div className="no-category">
    <h3>No resource found</h3>
    <Button onClick={action} variant="info" className="p-h-lg m-t-sm">
      Refresh
    </Button>
  </div>
);

export default NoResource;
