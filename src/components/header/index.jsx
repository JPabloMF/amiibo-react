import React from 'react';

import amiiboLogo from '../../assets/amiibo_logo.png';

import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  height: 120px;
  width: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.39) -3px 8px 17px -8px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <img src={amiiboLogo} alt="amiibo logo" />
    </StyledHeader>
  );
};

export default Header;
