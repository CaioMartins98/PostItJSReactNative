import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';

import {
  ButtonLogin,
  ButtonText,
  Container,
  ContainerLogin,
  ContainerWelcome,
  Description,
  InputField,
  LabelInput,
  Welcome,
} from './styles';

const Login = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerWelcome>
        <Welcome>Bem-vindo!</Welcome>
        <Description>Insira seu nome para entrar na plataforma !</Description>
      </ContainerWelcome>
      <ContainerLogin>
        <LabelInput>Nome</LabelInput>
        <InputField />
        <ButtonLogin onPress={() => {navigation.navigate('Dashboard')}}>
          <ButtonText>Entrar</ButtonText>
        </ButtonLogin>
      </ContainerLogin>
    </Container>
  );
};

export default Login;
