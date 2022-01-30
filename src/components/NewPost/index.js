import React, { useState } from 'react';
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

const NewPost = ({ handleChangeTitle, handleChangeText, handleSubmit }) => {
  return (
    <Container>
      <ContainerNewPost>
        <NewPostTitle>Novo post</NewPostTitle>
        <TitleLabel>Título</TitleLabel>
        <InputTitleField onChangeText={handleChangeTitle} />
        <DescriptionLabel>Descrição</DescriptionLabel>
        <InputDescriptionField
          multiline={true}
          numberOfLines={4}
          onChangeText={handleChangeText}
        />
      </ContainerNewPost>
      <ButtonContainer>
        <ButtonField onPress={handleSubmit}>
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
