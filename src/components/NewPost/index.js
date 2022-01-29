import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { addText, addTitle } from '../../redux/userSlice';
import dateCurrentFormat from '../../utils/dateCurentFormat';
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
  const [descriptionValue, setDescriptionValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const text = descriptionValue;
    const title = titleValue;
    dispatch(addTitle(title));
    dispatch(addText(text));
    navigation.navigate('Dashboard');
  };

  const handleChangeTitle = (event) => {
    setTitleValue(event);
  };
  const handleChangeText = (event) => {
    setDescriptionValue(event);
  };

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
