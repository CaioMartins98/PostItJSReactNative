import { Button, TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerWelcome = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Welcome = styled.Text`
  color: #fff;
  font-size: 36px;
  font-family: 'Poppins-Bold';
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 22px;
  font-family: 'Poppins-Regular';
`;

export const ContainerLogin = styled.View`
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
`;

export const LabelInput = styled.Text`
  color: #fff;
  font-family: 'Poppins-Regular';
  font-size: 22px;
`;

export const InputField = styled(TextInput)`
  background: #6666;
  height: 47px;
  width: 340px;
  color: #fff;
  font-family: 'Poppins-Regular';
  font-size: 20px;
  
`;

export const ButtonLogin = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: #5227c7;

  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Poppins-Bold';
  text-transform: uppercase;
  font-size: 18px;
`;
export const ErrorFieldContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const ErrorField = styled.Text`
  color: red;
  font-size: 12px;
  font-family: 'Poppins-Regular';
  /* width: 50px; */
  margin-bottom: 50px;
`;
