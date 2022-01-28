import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  bottom: 10px;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: auto;
  margin-top: 10px;
  
`;

export const ButtonField = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: #5227c7;
  width: 340px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 12px;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Poppins-Bold';
  text-transform: uppercase;
  font-size: 18px;
  margin-left: 100px;
  /* position: absolute; */
`;
