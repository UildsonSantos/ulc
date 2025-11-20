import React from 'react';

import Styled from './HomeScreen.native.styles';

const Home = () => {
  return (
    <Styled.Container>
      <Styled.ConeIcon />
      <Styled.Title>ULC</Styled.Title>
      <Styled.Subtitle>Reagindo ao tema do sistema</Styled.Subtitle>
    </Styled.Container>
  );
};

export default Home;
