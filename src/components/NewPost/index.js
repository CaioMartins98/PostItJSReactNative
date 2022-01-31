import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Snackbar } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  ButtonAddField,
  ButtonCancelField,
  ButtonContainer,
  ButtonField,
  ButtonText,
  Container,
  ContainerNewPost,
  ContainerScroll,
  DescriptionLabel,
  InputDescriptionField,
  InputTitleField,
  NewPostTitle,
  NewPostTitleContainer,
  TitleLabel,
} from './styles';

const NewPost = ({
  handleChangeTitle,
  handleChangeText,
  handleSubmit,
  handleCancel,
  error,
}) => {
  return (
    <Container>
      <ContainerNewPost>
        <ScrollView style={{ height: '100%' }}>
          <NewPostTitleContainer>
            <NewPostTitle>Novo post</NewPostTitle>
          </NewPostTitleContainer>
          <TitleLabel>Título</TitleLabel>
          <InputTitleField onChangeText={handleChangeTitle} />
          <DescriptionLabel>Descrição</DescriptionLabel>
          <InputDescriptionField
            multiline={true}
            numberOfLines={4}
            onChangeText={handleChangeText}
          />
        </ScrollView>
      </ContainerNewPost>
      <ButtonContainer>
        <ButtonCancelField onPress={handleCancel}>
          <ButtonText>Cancelar</ButtonText>
        </ButtonCancelField>
        <ButtonAddField onPress={handleSubmit}>
          <ButtonText>Adicionar</ButtonText>
        </ButtonAddField>
      </ButtonContainer>
    </Container>
  );
};

export default NewPost;
