import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledMainContainer = styled.div`
  margin-top: 150px;
  h1 {
    color: white;
  }
`;

const withFetch = (action) => (Component) => {
  const Fetch = ({ action, amiibo, loading }) => {
    const [amiiboName, setAmiiboName] = useState('');

    useEffect(() => {
      if (amiiboName) {
        action(amiiboName);
      }
    }, [amiiboName, action]);

    return loading ? (
      <StyledMainContainer>
        <h1>Loading...</h1>
      </StyledMainContainer>
    ) : (
      <Component setAmiiboName={setAmiiboName} amiibo={amiibo}></Component>
    );
  };

  const mapStateToProps = (state) => {
    const {
      amiibo: { data, loading },
    } = state;
    return { amiibo: data, loading };
  };

  return connect(mapStateToProps, { action })(Fetch);
};

export default withFetch;
