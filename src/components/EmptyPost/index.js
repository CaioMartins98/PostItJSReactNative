import React from 'react';
import { View } from 'react-native';

import LottieView from 'lottie-react-native';
import { AnimationContainer, Container } from './styles';
import EmptyAnimation from '../../assets/EmptyAnimation.json';
import { Description } from '../../pages/Login/styles';
const EmptyPost = () => {
  return (
    <Container>
      <AnimationContainer>
        <LottieView
          source={EmptyAnimation}
          autoPlay
          resizeMode="cover"
          loop
            style={{}}
        />
      </AnimationContainer>
      <Description>
        Sua plataforma de posts está vazia! Adicione o primeiro!
      </Description>
    </Container>
  );
};

export default EmptyPost;
