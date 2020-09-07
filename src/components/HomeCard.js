import React from 'react';
import styled from 'styled-components';

import { formatNumber } from '../helpers';

const HomeCard = ({ home }) => {
  return (
    <Wrapper id={home.id} className="col-sm-6 col-lg-4">
      <Card className="shopp__card">
        <div className="flex-center">
          <img src={home.photoURL} alt={home.homeowner} />
        </div>
        <div className="details-holder">
          <h4>{`${home.homeowner}'s Home`}</h4>
          Address: <p>{home.address}</p>
          <p>Price: ${formatNumber(home.price) || 0}</p>
        </div>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Card = styled.div`
  padding: 25px; */
  background: #fff;
  padding: 25px;
  border-radius: 3px;
  flex-grow: 1;
  box-shadow: 0.1rem 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    box-shadow: 0.15rem 1rem 1.7rem rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  img {
    clear: both;
    display: block;
    margin-bottom: 1.5rem !important;
    height: 170px;
    width: 250px;
    margin: auto;
    object-fit: contain;
  }
`;

export default HomeCard;
