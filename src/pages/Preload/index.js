import React, { useEffect } from 'react';
import { Button, View, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';
import { AnimationContainer, Container, DevBy, DevByContainer } from './styles';
import AnimationPreload from '../../assets/PostAnimation.json';
import { useNavigation } from '@react-navigation/native';
const Preload = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Login')
    }, 5000);
  },[])
  return (
    <Container>
      <AnimationContainer>
        <LottieView
          source={AnimationPreload}
          resizeMode="contain"
          autoPlay
          loop
        />
      </AnimationContainer>
      <ActivityIndicator color="#F5F5F5" size='large'/>
      <DevByContainer>
        <DevBy>Developed by Caio Martins</DevBy>
      </DevByContainer>
    
    </Container> 
  );
};

export default Preload;
