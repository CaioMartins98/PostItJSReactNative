import React from 'react';
import { Image, View } from 'react-native';
import TitleApp from '../../assets/titleApp.png';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Image source={TitleApp} />
    </Container>
  );
};

export default Header;
