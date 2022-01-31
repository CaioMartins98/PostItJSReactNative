import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/auth';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import {
  ButtonLogin,
  ButtonText,
  Container,
  ContainerLogin,
  ContainerWelcome,
  Description,
  ErrorField,
  ErrorFieldContainer,
  InputField,
  LabelInput,
  Welcome,
} from './styles';
import { useDispatch } from 'react-redux';
import { changeUser } from '../../redux/userSlice';
import { View } from 'react-native';
import { Snackbar } from 'react-native-paper';

const Login = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState({
    isVisible: false,
    message: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event);
    setError({ isVisible: false });
  };

  const handleSubmit = () => {
    const nameUser = inputValue;
    dispatch(changeUser(nameUser));
    validate();
  };

  const validate = () => {
    const name = inputValue;

    if (name === '') {
      setError({ isVisible: true, message: 'Campo de usuário obrigatório!' });
    } else {
      navigation.navigate('Dashboard');
    }
  };
  return (
    <Container>
      <ContainerWelcome>
        <Welcome>Bem-vindo!</Welcome>
        <Description>Insira seu nome para entrar na plataforma !</Description>
      </ContainerWelcome>
      <ContainerLogin>
        <LabelInput>Nome</LabelInput>
        <InputField onChangeText={handleChange} />
      
        <ButtonLogin onPress={() => handleSubmit()}>
          <ButtonText>Entrar</ButtonText>
        </ButtonLogin>
      </ContainerLogin>
      {/* <ErrorFieldContainer> */}
        <Snackbar
        visible={error.isVisible}
        onDismiss={() => setError({
          ...error,
          isVisible: false
        })}>
        {error.message}
      </Snackbar>
        {/* </ErrorFieldContainer> */}
    </Container>
  );
};

export default Login;
