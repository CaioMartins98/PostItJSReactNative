import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import EmptyPost from '../../components/EmptyPost';
import {
  ButtonContainer,
  ButtonField,
  ButtonText,
  Container,
  ContainerScroll,
} from './styles';
import NewPostIcon from '../../assets/NewPost.png';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Posts from '../../components/Posts';
import NewPost from '../../components/NewPost';
import dateCurrentFormat from '../../utils/dateCurentFormat';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, addText, addTitle } from '../../redux/userSlice';
import { AsyncStorageLib as AsyncStorage } from '@react-native-async-storage/async-storage';

import { Animated } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

const Dashboard = () => {
  const { text, title, name, posts } = useSelector((state) => state.user);

  const date = dateCurrentFormat();
  const [toggleModal, setToggleModal] = useState(false);

  const [descriptionValue, setDescriptionValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  //Organizar lista, tirar sujeira do cod.

  const [messageTitle, setMessageTitle] = useState('');
  const [messageText, setMessageText] = useState('');

  const [statePosts, setStatePosts] = useState([]);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const text = descriptionValue;
    const title = titleValue;
    dispatch(addTitle(title));
    dispatch(addText(text));

    const newPost = {
      titlePost: title,
      textPost: text,
      datePost: date,
      namePost: name,
      id: statePosts.length ? statePosts.length + 1 : 1,
    };

    const updatedPosts = [...statePosts, newPost];

    setStatePosts(updatedPosts);
    dispatch(addPost(updatedPosts));
    // validate();

    setToggleModal(false);
  };

  const handleCancel = () => {
    setToggleModal(false);
  };

  const handleChangeTitle = (event) => {
    setMessageTitle('');
    setTitleValue(event);
  };

  const handleChangeText = (event) => {
    setMessageText('');
    setDescriptionValue(event);
  };

  const validate = () => {
    const text = descriptionValue;
    const title = titleValue;

    if (title === '' && text === '') {
      setMessageTitle('Todos os campos devem ser preenchidos');
      return;
    } else if (title === '') {
      setMessageTitle('Campo de título obrigatório*');
    } else if (text === '') {
      setMessageText('Campo de texto obrigatório*');
    }
  };

  const handleRemove = (id) => {
    dispatch(removePost(id));
  };

  // useEffect(() => {
  //   if (posts.length > 0) {
  //     AsyncStorage.setItem('posts', JSON.stringify(posts));
  //   }
  // }, [posts]);

  // useEffect(() => {
  //   const localPosts = AsyncStorage.getItem('posts') || '';
  //   dispatch(addPost(JSON.parse(localPosts)));
  // }, []);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  return (
    <>
      {toggleModal ? (
        // <KeyboardAvoidingView
        // style={{ flex: 1 }}
        // behavior="position"
        // keyboardVerticalOffset={60}
        // >
        <ScrollView>
          <NewPost
            handleChangeText={handleChangeText}
            handleChangeTitle={handleChangeTitle}
            handleSubmit={handleSubmit}
            handleCancel={handleCancel}
            messageTitle={messageTitle}
            messageDescription={messageText}
          />
        </ScrollView>
      ) : (
        // </KeyboardAvoidingView>
        <Container>
          <ScrollView style={{ width: '100%' }}>
            {posts.length > 0 ? (
              posts
                // .sort((a, b) => b. - a.)
                .map((item, index) => {
                  return <Posts key={index} postData={item} />;
                })
            ) : (
              <EmptyPost />
            )}
            <View height={80} />
          </ScrollView>

          <ButtonContainer>
            <ButtonField
              onPress={() => {
                setToggleModal(true);
              }}
            >
              {/* <ButtonText>+</ButtonText> */}
              <FeatherIcon name="plus" color="#fff" size={30} />
            </ButtonField>
          </ButtonContainer>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
