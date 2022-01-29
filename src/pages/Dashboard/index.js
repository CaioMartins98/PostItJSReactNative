import React from 'react';
import { View, Text } from 'react-native';
import EmptyPost from '../../components/EmptyPost';
import { ButtonContainer, ButtonField, ButtonText, Container } from './styles';
import NewPostIcon from '../../assets/NewPost.png';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Posts from '../../components/Posts';
const Dashboard = () => {
  const posts = [1];
  
  const navigation = useNavigation();
  return (
    <Container>
      <Posts /> 
      <ButtonContainer>
        <ButtonField
          onPress={() => {
            navigation.navigate('NewPost');
          }}
        >
          <ButtonText>Novo Post</ButtonText>
          <FeatherIcon
            name="edit-3"
            color="#fff"
            size={20}
            style={{ marginLeft: 80 }}
          />
        </ButtonField>
      </ButtonContainer>
    </Container>
  );
};

export default Dashboard;
