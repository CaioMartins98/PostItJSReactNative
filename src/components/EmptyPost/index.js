import React from 'react';
import LottieView from 'lottie-react-native';
import { AnimationContainer, Container, Description } from './styles';
import EmptyAnimation from '../../assets/EmptyAnimation.json';

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
        Sua plataforma de posts está vazia!
      </Description>
    </Container>
  );
};

export default EmptyPost;
