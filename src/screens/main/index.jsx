import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { amiiboRequest } from '../../store/actions/';

import AmiiboCard from '../../components/amiiboCard';

import withFetch from '../../HOCs/fetch';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  h1 {
    color: white;
  }
`;

const StyledInput = styled.input`
  border-radius: 5px;
  height: 40px;
  border: none;
  padding-left: 10px;
  width: 200px;
`;

const StyledSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 150px;
`;

const StyledSearchButton = styled.button`
  width: 200px;
  margin-left: 30px;
  border-radius: 5px;
  border: none;
  background-color: #e70018;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const Main = ({ amiibo, setAmiiboName }) => {
  const [inputAmiibo, setInputAmiibo] = useState('');

  return (
    <div>
      <StyledSearchContainer>
        <StyledInput
          value={inputAmiibo}
          placeholder="Search amiibo... (mario)"
          onChange={(event) => setInputAmiibo(event.target.value)}
        />
        <StyledSearchButton onClick={() => setAmiiboName(inputAmiibo)}>
          Search
        </StyledSearchButton>
      </StyledSearchContainer>
      <StyledContainer>
        {amiibo.length ? (
          amiibo.map((amiibo, amiiboIndex) => (
            <AmiiboCard
              key={amiiboIndex}
              name={amiibo.name}
              imgUrl={amiibo.image}
              gameSeries={amiibo.gameSeries}
            />
          ))
        ) : (
          <h1>No results</h1>
        )}
      </StyledContainer>
    </div>
  );
};

Main.defaultProps = {
  amiibo: [],
};

Main.propTypes = {
  amiibo: PropTypes.array,
  setAmiiboName: PropTypes.func.isRequired,
};

export default withFetch(amiiboRequest)(Main);
