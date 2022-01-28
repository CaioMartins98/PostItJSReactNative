import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  ButtonContainer,
  ButtonField,
  ButtonText,
  Container,
  ContainerNewPost,
  DescriptionLabel,
  InputDescriptionField,
  InputTitleField,
  NewPostTitle,
  TitleLabel,
} from './styles';

const NewPost = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerNewPost>
        <NewPostTitle>Novo post</NewPostTitle>
        <TitleLabel>Título</TitleLabel>
        <InputTitleField />
        <DescriptionLabel>Descrição</DescriptionLabel>
        <InputDescriptionField multiline={true} numberOfLines={4} />
      </ContainerNewPost>
      <ButtonContainer>
        <ButtonField onPress={() => {navigation.navigate('Dashboard')}}>
          <ButtonText>Adicionar</ButtonText>
          <FeatherIcon
            name="plus"
            color="#fff"
            size={24}
            style={{ marginLeft: 80, marginBottom: 5 }}
          />
        </ButtonField>
      </ButtonContainer>
    </Container>
  );
};

export default NewPost;
