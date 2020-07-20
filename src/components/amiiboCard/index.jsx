import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #778ca3;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border-radius: 5px;
  background-color: white;
  transition: 300ms;
  &:hover {
    transform: scale(1.1);
    box-shadow: 3px 7px 13px 1px rgba(255, 255, 255, 0.24);
  }
  .name {
    font-weight: bold;
    font-size: 40px;
    margin: 0;
    color: #778ca3;
    user-select: none;
  }
  .game {
    font-size: 20px;
    margin: 0;
    color: #778ca3;
    user-select: none;
  }
`;

const AmiiboCard = ({ name, imgUrl, gameSeries }) => {
  return (
    <StyledCard>
      <img src={imgUrl} alt={name} />
      <p className="name">{name}</p>
      <p className="game">{gameSeries}</p>
    </StyledCard>
  );
};

AmiiboCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  gameSeries: PropTypes.string.isRequired,
};

export default AmiiboCard;
